const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

//Init middleware
app.use(logger);

//Get All Memebers
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));

});

//Get Single Member
app.get('/api/members', (req, res) => {
    req.json(members);
});

const PORT = process.env.PORT || 3000;

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));