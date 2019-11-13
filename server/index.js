require('dotenv').config()
let ctrl = require('./controller')
let { SERVER_PORT, CONNECTION_STRING } = process.env
let express = require('express')
let massive = require('massive')


let app = express()
app.use(express.json())

app.get('/api/houses', ctrl.getHouses)

app.post('/api/houses', ctrl.addHouse)

app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set("db", databaseConnection);
    console.log("Wanna hear a fun fact??");
    app.listen(SERVER_PORT, () =>
        console.log(`there is a ${SERVER_PORT}% chance that you'll need a therapist after Dev Mountain`)
    )
})