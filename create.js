const { Game, Biodata, History }= require("./models");

Game.create({
    username: 'Mamang',
    password: 'cogan'
});

Biodata.create ({
    fullname: 'MamangAja',
    age: 24,
    game_id: 1
});

History.create({
    playedAt: Date.now(),
    score: 85,
    GameId: 1
});