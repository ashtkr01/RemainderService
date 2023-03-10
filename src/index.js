const express = require('express');

const bodyParser = require('body-parser');

const jobs = require('./utils/job');

const EmailService = require('./services/email-service');

const { REMINDER_BINDING_KEY } = require('./config/serverConfig');

const { createChannel , subscribeMessage } = require('./utils/messageQueue');

const apiRoutes = require('./routes/index');

const { sendBasicMail} = require('./services/email-service');

const { PORT } = require('../src/config/serverConfig');

const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    

    app.use('/api',apiRoutes);

    const channel = await createChannel();
    subscribeMessage(channel , EmailService.subscribeEvents , REMINDER_BINDING_KEY);


    app.listen(PORT , ()=>{
        console.log(`Server Started at port ${PORT}`);

        // jobs();
        console.log("Hi");

        // sendBasicMail(
        //     'ashstkr@gmail.com',
        //     'ashishkumarkatheriyaa@gmail.com',
        //     'Testing purpose',
        //     'Tesing has been done '
        // );

        // cron.schedule('* * * * *', () => {
        //     console.log('running a task every minute');
        //   });
    });
}

//Call:
setUpAndStartServer();