const nodemailer = require('nodemailer');

module.exports = async (message) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 3004,
        secure: false,
        auth:{
            user: '',
            pass: ''
        }
});

    let emailOptions ={
        from: 'teste@hotmail.com',
        to: 'teste2@hotmail.com',
        subject: '',
        text: message,
    };


    let info = await transporter.sendMail(emailOptions);
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    console.log('Message sent: %s', info.messageId);

}