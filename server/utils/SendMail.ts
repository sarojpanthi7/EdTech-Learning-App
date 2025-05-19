require('dotenv').config();
import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path"

interface EmailOptions {
    email: string;
    subject: string;
    message: string;
    data: { [key: string]: string }
}

const sendEmail = async (options: EmailOptions): Promise<void> => {
    const transporter: Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });
    const { email, subject, template, data } = options;
    const templatePath = path.join(__dirname, `../mails`, template);

    //render the email template with ejs
    const html: string = await ejs.renderFile(templatePath, data);
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject,
        html
    }
    await transporter.sendMail(mailOptions);
}
export default sendEmail