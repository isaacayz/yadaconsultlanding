import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email via Resend
    // To enable: npm install resend, then set RESEND_API_KEY in .env.local
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@yadaconsult.com",
          to: "support@yadaconsult.com",
          subject: `New Contact Form Submission from ${name}`,
          reply_to: email,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Resend API error:", errorData)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }
    } else {
      // Fallback: log to console when no email service is configured
      console.log("Contact form submission (no email service configured):", {
        name,
        email,
        company,
        message,
      })
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
