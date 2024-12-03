"use server";
import nodemailer from "nodemailer";

const sendMessageToEmail = async (info: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = info;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dapoajibade66@gmail.com", // email,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Portfolio contact`,
    to: "dapoajibade66@gmail.com",
    subject: "damsfolio message",
    replyTo: email,
    text: message,
    html: `This email is from ${name} :
    <h3>${message}</h3>`,
  };

  return await transporter
    .sendMail(mailOptions)
    .then(() => {
      return { successMsg: "Message sent succesfully" };
    })
    .catch((err) => {
      const error = err as Error;
      console.log("Error sending message: ", error.message);
      return { errMsg: "Error sending message" };
    });
};

export default sendMessageToEmail;
