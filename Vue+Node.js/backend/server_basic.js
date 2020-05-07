const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());//Denne her fungere som en built-in middleware
app.use(bodyParser.json());//Det her også middleware

app.get('/Messages', (req, res) =>{

    const Messages = ["Besked 1", "Besked 2"];//Det er denne linje der skal laves om når jeg skal koble det op med ms i vidoe 3.1 Setting up Express
   
    res.send(Messages);
});

app.post('/Messages', (req, res) =>{
    console.log(req.body);
    res.json({});
})

app.listen(port, () => console.log('app running'));