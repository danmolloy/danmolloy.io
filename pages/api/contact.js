require('dotenv').config()

const PASSWORD = process.env.password

export default function (req, res) {

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'donotreply.danmolloy@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });
  console.log(req.body)


const mailData = {
  from: 'donotreply.danmolloy@gmail.com',
  to: 'danmolloy91@gmail.com',
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