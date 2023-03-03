const sender = require('../config/emailConfig');

const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

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

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({
            status : "PENDING"
        });
        return response;
    } catch (error) {
        throw error;
    }
}

const updateTicket = async (ticketId , data) => {
    try {
        const response = await repo.update(ticketId , data);
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification = async (data) => {
    try {
        console.log("Data ",data);
        const ticket = await repo.create(data);
        return ticket;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicMail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}