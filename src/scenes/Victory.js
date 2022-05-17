class Victory extends Phaser.Scene {
    constructor() {
        super("victoryScene");
    }

    preload () {
        this.load.image('victory', './assets/victory.png');
    }

    create () {
        this.add.image(game.config.width/2, game.config.height/2, 'victory');
    }
}