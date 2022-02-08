require('dotenv').config()

const PASSWORD = process.env.PASSWORD
const FROM_EMAIL = process.env.FROM_EMAIL
const TO_EMAIL = process.env.TO_EMAIL

export default function (req, res) {

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });
  console.log(req.body)


const mailData = {
  from: FROM_EMAIL,
  to: TO_EMAIL,
  subject: `Message from ${req.body.name}`,
  text: `${req.body.message} | Sent from ${req.body.email}`,
  html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
}

transporter.sendMail(mailData, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
})
res.status(200)
res.send()
}