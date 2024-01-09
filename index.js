const express = require("express");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/emails", (req, res) => {
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_APP_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    };
    let transporter = nodemailer.createTransport(config);

    let message = {
        from: 'duxcrispy@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.body,
    };

    transporter.sendMail(message).then((info) => {
        return res.status(201).json(
            {
                msg: "Email sent",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            }
        )
    }).catch((err) => {
        return res.status(500).json({ msg: err });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});