require("dotenv").config();
const nodemailer = require("nodemailer");

const args = process.argv.slice(2);
const to = args[0];
const downloadLink = args[1]

const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Download</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header h2 {
            color: #333;
        }
        .content {
            text-align: center;
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Download Your Resume</h2>
        </div>
        <div class="content">
            <p>Dear Valued User,</p>
            <p>Your resume is ready for download. Click the button below to access it.</p>
            <a href="${downloadLink}" class="button">Download Resume</a>
        </div>
        <div class="footer">
            <p>If you didn't request this, please ignore this email.</p>
            <p>&copy; 2025 - pdf-generator-workflow.</p>
        </div>
    </div>
</body>
</html>
`


const sendEmail = (to) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: "ukomalachi@gmail.com",
            to,
            subject: "Your Resume is Ready for Download!",
            html,
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error)

}



sendEmail(to);
