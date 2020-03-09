// Similar to import express from 'express';
const express = require('express'); // npm i express
const shortid = require('shortid'); // npm i shortid

const server = express();

let hubs = [];
let lessons = [];

server.use(express.json()); // <<<<<<<<<<< add this line

server.get('/', (req, res)=>{
    res.status(200).json({api: 'running...'})
});

// write a /hello endpoint that returns an object like so: {hello: 'web27'}

server.get('/hello', (req, res) => {
    res.status(200).json({hello: 'Web27'})
});

// hubs

server.post('/api/hubs', (req, res) => {
    // axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server
    const hubData = req.body;

    hubData.id = shortid.generate();

    hubs.push(hubData)

    res.status(201).json(hubData);
});

server.get('/api/hubs', (req, res) => {
    res.status(200).json(hubs);
})

// Lessons

server.post('/api/lessons', (req, res) => {
    const lessonsData = req.body;
    lessonsData.id = shortid.generate();

    lessons.push(lessonsData);

    res.status(201).json(lessonsData);
})

server.get('/api/lessons', (req, res) => {
    res.status(200).json(lessons);
})

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`)
);

// to run server use: node index.js

