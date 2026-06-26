import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service of choice:
    // - ConvertKit:  POST https://api.convertkit.com/v3/forms/{form_id}/subscribe
    // - Mailchimp:   POST https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members
    // - Buttondown:  POST https://api.buttondown.email/v1/subscribers
    // - Resend:      Use Resend SDK to add contact
    //
    // For now, we log the subscription and return success.
    console.log(`[Newsletter] New subscriber: ${email}`);

    return NextResponse.json(
      { message: "Successfully subscribed", email },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
