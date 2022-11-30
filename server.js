#!usr/bin/env node

import roll from "./lib/roll.js"
import minimist from "minimist"
import express from 'express'

const args = minimist(process.argv.slice(2))

const port = args.port || 5000

const app = express()


app.use(express.urlencoded({extended: true}));

// returns 200 OK Status


app.get('/app/', (req, res) => {
	res.status(200).send("200 OK")
});
// default roll
app.get('/app/roll', (req, res) => {
    //res.status(200)
    res.json(roll(6, 2, 1))
});

app.post('/app/roll/', (req, res) => {
    res.send('hi')
    let sides = parseInt(req.body.sides)
    let dice = parseInt(req.body.dice)
    let rolls = parseInt(req.body.rolls)
    res.status(200).json(roll(sides,dice,rolls))
});

app.get('/app/roll/:sides/', (req, res) => {
    let sides = parseInt(req.params.sides)
    res.status(200).json(roll(sides, 2, 1))
})

app.get('/app/roll/:sides/:dice', (req, res) => {
    let sides = parseInt(req.params.sides)
    let dice = parseInt(req.params.dice)
    res.status(200).json(roll(sides, dice, 1))
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
    let sides = parseInt(req.params.sides)
    let dice = parseInt(req.params.dice)
    let rolls = parseInt(req.params.rolls)
    res.status(200).json(roll(sides, dice, rolls))
})

// default that says 404 NOT FOUND
app.get('*', (req, res) => {
    res.send("404 NOT FOUND")
})

app.listen(port, () => {
	console.log("Server listening on port " + port)
})