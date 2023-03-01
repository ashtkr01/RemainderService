const express = require('express');

const bodyParser = require('body-parser');

const { sendBasicMail} = require('./services/email-service');

const { PORT } = require('../src/config/serverConfig');

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT , ()=>{
        console.log(`Server Started at port ${PORT}`);

        sendBasicMail(
            'ashstkr@gmail.com',
            'ashishkumarkatheriyaa@gmail.com',
            'Testing purpose',
            'Tesing has been done '
        );
    });
}

//Call:
setUpAndStartServer();