const cron = require('node-cron');

const EmailService = require('../services/email-service');

const sender = require('../config/emailConfig');

/**
 * 10:00am
 * Every 5 minutes
 * we will check are their are pending email which was expecting to be sent by now  and is pending , if it so send them
 */

const setUpJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await EmailService.fetchPendingEmails();
        response.forEach((email) => {
            
            sender.sendMail({
                to: email.recipientEmail,
                subject: email.subject,
                content: email.content
            } , async(err , data) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await EmailService.updateTicket(email.id , {status : "SUCCESS"});
                }
            });
        });
        console.log(response);
    });
}

module.exports = setUpJobs;
