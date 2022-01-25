const express = require('express');
const connect = require('./connect');
const models = require('./model/models')
const router = require('./router/index')
const cors = require('cors');



const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())
app.use('/', router)

const start = async () => {
    try {
        await connect.authenticate();
        await connect.sync();
        app.listen(port, () => {
            console.log(`server started`);
        })        
    } catch (error) {
        console.log(error)
    }
}


start()