const { sendContactForm } = require("../email/email");
const Contact = require("../models/communication/contact.schema");

const getEmailForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      content: message,
      date: new Date(),
    });
    await sendContactForm(newContact);
    await newContact
      .save()
      .then((t) => {
        console.log(t);
        res.status(200).json(t);
      })
      .catch((e) => {
        console.error(e);
        res.status(400).send("Add Error");
      });
    return res
      .status(200)
      .json({ message: "Votre message a bien été envoyé." });
  } catch (error) {
    return res.status(500).json({ message: "une erreur est survenue." });
  }
};

module.exports = { getEmailForm };
