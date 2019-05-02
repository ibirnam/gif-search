// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    const gifUrl = 'https://media.giphy.com/media/26ufcfqqe6Fobdygg/giphy.gif'
    res.render('hello-gif', { gifUrl })
})

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', { name });
})

// Start Server

app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});