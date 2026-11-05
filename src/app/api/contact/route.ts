import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      brandName,
      email,
      phone,
      monthlyBudget,
      service,
      websiteUrl,
      message,
    } = data;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact details (Name, Email, or Phone)." },
        { status: 400 }
      );
    }

    // In a production environment with SMTP or Resend credentials:
    // e.g. process.env.RESEND_API_KEY or process.env.SMTP_PASSWORD
    // We log the inquiry securely and return success:
    console.log("[INCOMING LEAD CAPTURE - X SOLUTION STUDIO]", {
      timestamp: new Date().toISOString(),
      fullName,
      brandName: brandName || "N/A",
      email,
      phone,
      monthlyBudget: monthlyBudget || "Unspecified",
      service: service || "General Inquiry",
      websiteUrl: websiteUrl || "N/A",
      message: message || "N/A",
      targetRecipient: "xsolutionstudio@gmail.com",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. A founding partner will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please contact via WhatsApp directly." },
      { status: 500 }
    );
  }
}
