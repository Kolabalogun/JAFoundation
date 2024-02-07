const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "your_email_provider",
  auth: {
    user: "jafoundationosun@gmail.com",
    pass: "Jafoundation2024",
  },
});

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});

// Handle POST request for sending emails
app.post("/send-email", (req, res) => {
  const { firstName, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: "jafoundationosun@gmail.com",
    to: "akinola10302@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
