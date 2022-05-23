const express = require("express");
const router = express.Router();

const { History } = require("../models");

router.get("/history",async (_, res) => {
    res.json(await History.findAll());
});

router.post("/history",async (req, res) => {
    const game = await History.create({
        GameId: req.body.gameId,
        playedAt: Date.now(),
        score: req.body.score
    });
    res.status(201).json(game);
});

router.put("/history/:id",async (req, res) => {
    const game = await History.update({
        GameId: req.body.gameId,
        playedAt: Date.now(),
        score: req.body.score
    }, {
        where: {
            id: req.params.id
        }
    });    
    res.status(201).json(game);
});

router.delete("/history/:id",async (req, res) => {
    const game = await History.destroy({
        where: {
            id: req.params.id
        }
    })
});


module.exports = router;