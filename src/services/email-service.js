const sender = require('../config/emailConfig');

const sendBasicMail = async (mailFrom , mailTo , mailSubject , mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            body: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicMail
}