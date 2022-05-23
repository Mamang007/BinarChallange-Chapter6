const express = require("express");
const router = express.Router();

const { Game } = require("../models");

router.get("/games",async (_, res) => {
    res.json(await Game.findAll());
});

router.post("/game",async (req, res) => {
    const game = await Game.create({
        username: req.body.username,
        password: req.body.password
    });
    res.status(201).json(game);
});

router.put("/game/:id",async (req, res) => {
    const game = await Game.update({
        username: req.body.username,
        password: req.body.password
    }, {
        where: {
            id: req.params.id
        }
    });    
    res.status(201).json(game);
});

router.delete("/game/:id",async (req, res) => {
    const game = await Game.destroy({
        where: {
            id: req.params.id
        }
    })
});


module.exports = router;