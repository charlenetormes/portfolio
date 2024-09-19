import nodemailer from "nodemailer";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: "charlenetormes@gmail.com",
            to: "charlene.tormes@gmail.com",
            subject: `Contacted via Portfolio Website | ${body?.sender}`,
            text: body?.message,
            html: `<p>${body?.message}</p><br/><p>Sender Email: ${body?.senderEmail}</p>`,
        });
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        return { success: false, message: `Error: ${error.message}` };
    }
});
