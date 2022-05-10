let config = {
    type: Phaser.CANVAS,
    width:640,
    height:480,
    physics: {
        default: 'arcade',
    },
    scene: [Play],
};

// set up game borders

let game = new Phaser.Game(config);
let pointer;