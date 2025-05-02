const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactForm = async (content) => {
  const mailOptions = {
    priority: "high",
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_MAIL,
    subject: "Nouveau formulaire de contact : " + content.subject,
    html: `<p>De: ${content.name}<br/>Email : ${
      content.email
    }<br/>Daté du : ${content.date.toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    })}<br/><br/>${content.content}</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactForm,
};
