import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response
})

app.listen(4545)