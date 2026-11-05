const fs = require("fs");
const path = require("path");

const IGNORE_PATTERNS = [
  "node_modules",
  ".next",
  ".git",
  ".DS_Store",
  "npm-debug.log",
  "yarn-debug.log",
  "yarn-error.log",
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (IGNORE_PATTERNS.includes(file)) return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function uploadToGitHub(token, repoName = "x-solution") {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "XSolution-Studio-Uploader",
  };

  console.log("1. Authenticating with GitHub...");
  const userRes = await fetch("https://api.github.com/user", { headers });
  if (!userRes.ok) {
    throw new Error(`Authentication failed: ${userRes.statusText}`);
  }
  const user = await userRes.json();
  const owner = user.login;
  console.log(`✓ Authenticated as: ${owner}`);

  console.log(`2. Checking repository '${owner}/${repoName}'...`);
  let repoRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, { headers });
  let repoData;

  if (repoRes.status === 404) {
    console.log(`Creating repository '${repoName}'...`);
    const createRes = await fetch("https://api.github.com/user/repos", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: repoName,
        private: false,
        description: "X Solution Studio — Performance Marketing & Web Architecture Agency Website",
        auto_init: true,
      }),
    });
    if (!createRes.ok) {
      throw new Error(`Failed to create repository: ${await createRes.text()}`);
    }
    repoData = await createRes.json();
    console.log(`✓ Created repo: ${repoData.html_url}`);
  } else {
    repoData = await repoRes.json();
    console.log(`✓ Found existing repo: ${repoData.html_url}`);
  }

  // Get current ref for main
  console.log("3. Fetching latest commit on 'main'...");
  let refRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/ref/heads/main`, { headers });
  let parentCommitSha = null;
  let baseTreeSha = null;

  if (refRes.ok) {
    const refData = await refRes.json();
    parentCommitSha = refData.object.sha;
    const commitRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/commits/${parentCommitSha}`, { headers });
    if (commitRes.ok) {
      const commitData = await commitRes.json();
      baseTreeSha = commitData.tree.sha;
    }
  }

  console.log("4. Scanning project files...");
  const rootDir = path.resolve(__dirname, "..");
  const filePaths = getAllFiles(rootDir);
  console.log(`Found ${filePaths.length} files to upload.`);

  console.log("5. Uploading files as Git Blobs...");
  const treeItems = [];

  for (let i = 0; i < filePaths.length; i++) {
    const filePath = filePaths[i];
    const relativePath = path.relative(rootDir, filePath).replace(/\\/g, "/");
    const contentBuffer = fs.readFileSync(filePath);
    const contentBase64 = contentBuffer.toString("base64");

    const blobRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/blobs`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        content: contentBase64,
        encoding: "base64",
      }),
    });

    if (!blobRes.ok) {
      const err = await blobRes.text();
      console.error(`Failed to upload blob for ${relativePath}: ${err}`);
      continue;
    }

    const blobData = await blobRes.json();
    treeItems.push({
      path: relativePath,
      mode: "100644",
      type: "blob",
      sha: blobData.sha,
    });

    if ((i + 1) % 10 === 0 || i === filePaths.length - 1) {
      console.log(`Uploaded ${i + 1}/${filePaths.length} files...`);
    }
  }

  console.log("6. Creating Git Tree...");
  const treeBody = { tree: treeItems };
  if (baseTreeSha) {
    treeBody.base_tree = baseTreeSha;
  }

  const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/trees`, {
    method: "POST",
    headers,
    body: JSON.stringify(treeBody),
  });

  if (!treeRes.ok) {
    throw new Error(`Failed to create tree: ${await treeRes.text()}`);
  }
  const treeData = await treeRes.json();

  console.log("7. Creating Commit...");
  const commitBody = {
    message: "feat: full agency website for X Solution Studio (Next.js 15, bilingual EN/AR, dark/light theme, SEO & GEO)",
    tree: treeData.sha,
  };
  if (parentCommitSha) {
    commitBody.parents = [parentCommitSha];
  }

  const commitRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/commits`, {
    method: "POST",
    headers,
    body: JSON.stringify(commitBody),
  });

  if (!commitRes.ok) {
    throw new Error(`Failed to create commit: ${await commitRes.text()}`);
  }
  const commitData = await commitRes.json();

  console.log("8. Updating 'main' branch reference...");
  const updateRefRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/refs/heads/main`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      sha: commitData.sha,
      force: true,
    }),
  });

  if (!updateRefRes.ok) {
    throw new Error(`Failed to update branch: ${await updateRefRes.text()}`);
  }

  console.log("\n============================================");
  console.log("🚀 Project successfully uploaded to GitHub!");
  console.log(`Repository URL: ${repoData.html_url}`);
  console.log("============================================\n");
  return repoData.html_url;
}

const token = process.env.GITHUB_TOKEN || process.argv[2];
if (!token) {
  console.error("Please provide your GitHub Token as argument or GITHUB_TOKEN env var.");
  process.exit(1);
}

uploadToGitHub(token, "x-solution")
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
