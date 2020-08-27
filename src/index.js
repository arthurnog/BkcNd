const express = require('express');

const app = express();

app.get('/projects',(request,response) => {
    return response.json([
        'proj1',
        'proj2',
    ]);
});

app.post('/projects',(request,response) => {
    return response.json([
        'proj1',
        'proj2',
        'proj3',
    ]);
});

app.put('/projects/:id',(request,response) => {
    return response.json([
        'proj4',
        'proj2',
        'proj3',
    ]);
});

app.delete('/projects/:id',(request,response) => {
    return response.json([
        'proj2',
        'proj3',
    ]);
});

app.listen(3333, () => {
    console.log('BckNd started (╯°□°）╯︵ ┻━┻');
});