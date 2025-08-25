export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // optional, avoids any caching

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // ✅ Ensure required env vars are present
    const requiredEnvVars = [
      "CPANEL_EMAIL_HOST",
      "CPANEL_EMAIL_USER",
      "CPANEL_EMAIL_PASSWORD",
      "EMAIL_RECEIVER",
    ];

    const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
    if (missingVars.length > 0) {
      console.error("Missing environment variables:", missingVars);
      return NextResponse.json(
        {
          status: 500,
          message: "Server configuration error",
          error: `Missing: ${missingVars.join(", ")}`,
        },
        { status: 500 }
      );
    }

    // ✅ Get request body (matches frontend form)
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          status: 400,
          message: "All fields are required",
          error: "Validation failed",
        },
        { status: 400 }
      );
    }

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.CPANEL_EMAIL_HOST,
      port: 465, // SSL
      secure: true,
      auth: {
        user: process.env.CPANEL_EMAIL_USER,
        pass: process.env.CPANEL_EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    // ✅ Format message
    const formattedMessage = message
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // ✅ Mail options
    const mailOptions = {
      from: `"${process.env.NEXT_PUBLIC_SITE_NAME || "Website"} Contact" <${
        process.env.CPANEL_EMAIL_USER
      }>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New Contact Submission: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Subject: Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; white-space: normal; word-break: break-word;">
                ${formattedMessage}
              </td>

            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
            Sent via ${
              process.env.NEXT_PUBLIC_SITE_NAME || "Website"
            } • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      headers: {
        "X-Mailer": "Next.js Contact Form",
        "X-Priority": "1",
      },
    };

    // ✅ Send email with timeout
    const sendPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Email sending timed out")), 10000)
    );

    await Promise.race([sendPromise, timeoutPromise]);

    return NextResponse.json(
      {
        status: 200,
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    let errMessage = "An unknown error occurred";
    let errCode: string | undefined;

    if (error instanceof Error) {
      errMessage = error.message;
      errCode = (error as { code?: string }).code;

      console.error("Email Error:", {
        message: error.message,
        code: errCode,
        stack: error.stack,
      });
    }

    // ✅ User-friendly error messages
    let userMessage = "An error occurred while sending the email.";
    if (errCode === "EAUTH") {
      userMessage =
        "Authentication failed. Please check your email credentials.";
    } else if (errCode && ["ECONNECTION", "ETIMEDOUT"].includes(errCode)) {
      userMessage = "Unable to connect to the email server.";
    } else if (errMessage.includes("timed out")) {
      userMessage = "Email server timed out.";
    }

    return NextResponse.json(
      {
        status: 500,
        message: userMessage,
        error: process.env.NODE_ENV === "development" ? errMessage : undefined,
      },
      { status: 500 }
    );
  }
}
