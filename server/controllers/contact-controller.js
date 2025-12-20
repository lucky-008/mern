const Contact = require("../models/contact-model");

const contactForm = async (req, res, next) => {
  try {
    const response = req.body;
    await Contact.create(response);

    return res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    return next({
      status: 500,
      message: "Message not delivered",
      extraDetails: error.message,
    });
  }
};

module.exports = contactForm;
