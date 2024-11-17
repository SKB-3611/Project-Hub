"use server"
import nodemailer  from "nodemailer";

export async function sendEmail(data) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'gmail', 'hotmail', or custom SMTP
            auth: {
              user: 'projecthubbusiness@gmail.com', // Replace with your email address
              pass: process.env.PASSWORD, // Replace with your password or app-specific password
            },
          });
          const mailOptions = {
            from: 'projecthubbusiness@gmail.com', // Your authenticated email
            to: "projecthubbusiness@gmail.com,shubhambhilare4899223@gmail.com,dhumalomkar233@gmail.com", // Replace with your receiving email
            subject: `Message from ${data.email}`,
            text: `You received a message:\n\n
            name: ${data.name}\n
            from: ${data.email}\n
            subject: ${data.subject}\n
            message:${data.message}`,
            replyTo: data.email, // Allows you to reply directly to the sender
          };
          await transporter.sendMail(mailOptions);
          return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}