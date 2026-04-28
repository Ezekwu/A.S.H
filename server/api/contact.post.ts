import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  const { name, email, company, projectType } = body;

  if (!name || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Name and email are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address.",
    });
  }

  const { error } = await resend.emails.send({
    from: "Art Should Hurt <hello@contact.artshouldhurt.com>",
    to: ["dat@artshouldhurt.com"],
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` @ ${company}` : ""}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #171717; color: #ffffff; padding: 40px; border-radius: 8px;">
        <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #333; letter-spacing: -0.5px;">New Contact Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.6;">
          <tr>
            <td style="padding: 16px 0; color: #888; width: 140px; border-bottom: 1px solid #222;">Name</td>
            <td style="padding: 16px 0; color: #fff; border-bottom: 1px solid #222;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 16px 0; color: #888; border-bottom: 1px solid #222;">Email</td>
            <td style="padding: 16px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #fff; text-decoration: none;">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 16px 0; color: #888; border-bottom: 1px solid #222;">Company</td>
            <td style="padding: 16px 0; color: #fff; border-bottom: 1px solid #222;">${company}</td>
          </tr>` : ""}
          ${projectType ? `
          <tr>
            <td style="padding: 16px 0; color: #888; border-bottom: 1px solid #222;">Project Type</td>
            <td style="padding: 16px 0; color: #fff; border-bottom: 1px solid #222;">${projectType}</td>
          </tr>` : ""}
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email. Please try again.",
    });
  }

  return { success: true };
});
