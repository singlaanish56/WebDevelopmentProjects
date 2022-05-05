const express = require('express');
const app = express();
const path = require('path');

//set the view engine for ejs
app.set('view engine', ' ejs');
//add the folder name for ejs
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.send('home');
})

app.listen(3001, () =>{
    console.log('Serving on the port 3001')
})