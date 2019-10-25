const nodemailer = require('nodemailer');


export class MailService {
    constructor(){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:"a.marianesantana@gmail.com",
                pass: "!@#"
               }
           });
        
        const theEmail = {
            from: 'a.marianesantana@gmail.com',
            to: 'marianesantana@brq.com',
            subject: 'Atestado do dia 24/10',
            html: "<h1>Segue o atestado...</h1>",
        
        };
        
        transporter.sendMail(theEmail, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
}


