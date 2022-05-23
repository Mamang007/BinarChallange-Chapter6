const express = require("express");
const router = express.Router();

const { Biodata } = require("../models");

router.get("/biodata",async (_, res) => {
    res.json(await Biodata.findAll());
});

router.post("/biodata",async (req, res) => {
    const biodata = await Biodata.create({
        game_id: req.body.gameId,
        fullname: req.body.fullname,
        age: req.body.age
    });
    res.status(201).json(game);
});

router.put("/biodata/:id",async (req, res) => {
    const biodata = await Biodata.update({
        game_id: req.body.gameId,
        fullname: req.body.fullname,
        age: req.body.age
    }, {
        where: {
            id: req.params.id
        }
    });    
    res.status(201).json(game);
});

router.delete("/biodata/:id",async (req, res) => {
    const biodata = await Biodata.destroy({
        where: {
            id: req.params.id
        }
    })
});


module.exports = router;