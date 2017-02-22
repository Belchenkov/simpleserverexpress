const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', (req, res) => {
    let people = [
        {
            first_name: 'Aleksey',
            last_name: 'Belchenkov',
            age: 28
        },
        {
            first_name: 'Brad',
            last_name: 'Traversy',
            age: 37
        }
    ];
    res.json(people);
});

app.get('/download', (req, res) => {
    res.download (path.join(__dirname, './downloads/simple.txt'));
});

app.get('/about', (req, res) => {
    res.redirect('about.html');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});