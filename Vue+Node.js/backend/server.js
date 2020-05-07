const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());//Denne her fungere som en built-in middleware
app.use(bodyParser.json());//Det her også middleware

var Messages = ["Besked 1", "Besked 2"];//Det er denne linje der skal laves om når jeg skal koble det op med ms i vidoe 3.1 Setting up Express
//Når den ligger herude har begge endpoint adgang til den

app.get('/Messages', (req, res) =>{
    res.send(Messages);
});

app.post('/Messages', (req, res) =>{
    let msg = req.body;    
    console.log(msg);
    Messages.push(msg.besked);
    res.json(msg);
    console.log(Messages);
});



app.listen(port, () => console.log('app running'));