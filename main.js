let config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.Center_BOTH,
        width: 480,
        height: 320
    },
    scene: [Title, Play, Final]
}

let game = new Phaser.Game(config);