import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    // ── Option A: Resend (recommended) ──
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contact@yourdomain.com",
    //   to: "theiqonex@gmail.com",
    //   subject: `New message from ${name}`,
    //   html: `<p><b>Name:</b> ${name}</p>
    //          <p><b>Email:</b> ${email}</p>
    //          <p><b>Phone:</b> ${phone || "N/A"}</p>
    //          <p><b>Project Type:</b> ${projectType}</p>
    //          <p><b>Message:</b> ${message}</p>`,
    // });

    // ── Option B: Log for now (remove when using Resend) ──
    console.log("Contact form submission:", { name, email, phone, projectType, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
