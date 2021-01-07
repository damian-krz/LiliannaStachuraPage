const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); 
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send", (req, res) => {

    const output = `
    <p>Nowa wiadomość</p>
    <h3>Od:</h3>
    <ul>
        <li>Email: ${req.body.email} </li>
        <li>Temat: ${req.body.subject} </li>
    </ul>
        <h3>Wiadomość:</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.mailgun.org",
        port: 587,
        secure: false,
        auth: {
          user: "postmaster@sandboxb988a76538cc4c569bfa0e8faf11ccee.mailgun.org",
          pass: "e233a8d36d6243a87613fe48a5f70d4a-2af183ba-219d2e20"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: "damiano.krzywda@gmail.com",
        to: "damiano.krzywda@gmail.com",
        subject: "Nowa wiadomość ze strony",
        html: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log("Email sent " + info.response);
            res.status(204).send(); 
        }
    })
});

app.listen(5502, () => {
    console.log("Server started");
})