const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects',(request,response) => {
    const { title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'proj1',
        'proj2',
    ]);
});

app.post('/projects',(request,response) => {
    const { title, owner} = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'proj1',
        'proj2',
        'proj3',
    ]);
});

app.put('/projects/:id',(request,response) => {
    const {id} = request.params;

    console.log(id);

    return response.json([
        'proj4',
        'proj2',
        'proj3',
    ]);
});

app.delete('/projects/:id',(request,response) => {
    const params = request.params;

    console.log(params);

    return response.json([
        'proj2',
        'proj3',
    ]);
});

app.listen(3333, () => {
    console.log('BckNd started (╯°□°）╯︵ ┻━┻');
});