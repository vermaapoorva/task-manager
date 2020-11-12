const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "apoorva.verma@hotmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app, ${name}. Let me know how you like the app! :)`,
  };
  sgMail.send(msg);
};

const sendCancellationEmail = (email, name) => {
  const msg = {
    to: email,
    from: "apoorva.verma@hotmail.com",
    subject: "Goodbye!",
    text: `Goodbye, ${name}. If possible, please let me know why you cancelled by replying to this email. Thank you!`,
  };
  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
