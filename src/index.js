const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('../src/config/serverConfig');

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT , ()=>{
        console.log(`Server Started at port ${PORT}`);
    });
}

//Call:
setUpAndStartServer();