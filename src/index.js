const express = require('express');

const app = express();

app.get('/projects',(request,response) => {
    return response.json({ message: 'ohayo sekai good morning world'});
});

app.listen(3333);