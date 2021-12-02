// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("ENV", process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    console.log(body);
    // console.log("ENV", process.env.SENDGRID_API_KEY);

    const message = {};
    const msg = {
        to: "elbegsaihan10@gmail.com", // Change to your recipient
        from: "elbeg657@gmail.com", // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log("Email sent");
        })
        .catch((error) => {
            console.error(error);
        });
    // res.status(200).json({ name: "John Doe" });
}
