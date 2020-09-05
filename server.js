const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;


app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/contact", (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  const mailOpts = {
    from: "",
    to: GMAIL_USER,
    subject: "From portfolio site contact form",
    text: `Name: ${req.body.name} \n
           Company: ${req.body.company} \n
           Email: ${req.body.email} \n
           ${req.body.message}`
  }
  smtpTrans.sendMail(mailOpts, (err, response) => {
    if (err) {
      res.send("Server Error. Please try again or send email to mattpickle@mattpickle.net");
    } else {
      res.sendFile(path.join(__dirname+"/client/index.html"));
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});