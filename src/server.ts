import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {router as papelRouter} from './papel';
import {oktaAuth} from './auth';
const bearerToken = require('express-bearer-token');
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bearerToken())
    .use(oktaAuth)
    .use(papelRouter);

app.listen(4201, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('My Node App listening on port 4201');
});
