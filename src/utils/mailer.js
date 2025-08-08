import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: "hello@gtftech.in",
    pass: "",
  },
});

  const formatFullDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options); 
  };
  console.log(formatFullDate(new Date()))
const sendEmail = async ({ name, email, phone, comments }) => {
let htmlTemplate=`<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body style="">
  <div style="background-color: #333; padding: 1%; margin: 0; border-radius: 2px;">
    <p style="color: #b98e42; text-align: center; font-size: 45px; font-weight: 600; margin: 0;">
      Welcome to <span style="font-size: 55px;">Blue Lagoon</span>
    </p>
  </div>
  <div style="border: 5px solid #b98e42; border-top: none;">
    <div style="padding: 1% 3%; margin: 0 0 1% 0;">
      <p style="font-size: 25px; text-align: center; text-transform: capitalize; font-weight: 800; margin: 0;">
        Contact Form
      </p>
      <p style="font-size: 16px;"><strong>Hello </strong>Blue Lagoon,</p>
      <p style="font-size: 16px;">Someone has tried to contact Blue Lagoon team.</p>
      <p style="font-size: 16px;">Name: ${name}</p>
      <p style="font-size: 16px;">Email: ${email}</p>
      <p style="font-size: 16px;">Phone: ${phone}</p>
       <p style="font-size: 16px;">Message: ${comments}</p>
      <p style="font-size: 16px;">Timing: ${formatFullDate(new Date())}</p>
      <p style="font-size: 16px;">Cheers!</p>
      <p style="font-size: 16px;">Blue Lagoon</p>
    </div>
  </div>
</body>
</html>`;
(async () => {
  const info = await transporter.sendMail({
    from: 'hello@gtftech.in',
    to: "hritik.kumar@gtftechnologies.com",
    subject: "New Lead Received",
    html: htmlTemplate, 
  });

  console.log("Message sent:", info.messageId);
})();

}
export default sendEmail;