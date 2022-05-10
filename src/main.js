let config = {
    type: Phaser.CANVAS,
    width:480,
    height:320,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        }
    },
    scene: [Play],
};

// set up game borders

let game = new Phaser.Game(config);
let pointer;