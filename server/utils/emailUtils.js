const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (otp)=> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  return transporter.sendMail({
    from: '"ADMIN" <account-recovery@test.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "OTP for password reste", // Subject line
    html: `Hi the OTP for resetting your password is <b>${otp}</b>`, // html body
  });

}



module.exports = sendMail;
