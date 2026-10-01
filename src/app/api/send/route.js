import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>

          <hr />

          <p style="color: #777; font-size: 12px;">
            Sent from your portfolio website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json(
      { message: "Email sent successfully.", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);

    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
