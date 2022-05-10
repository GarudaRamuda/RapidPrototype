class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    preload() {
        this.load.image('title', './assets/roly-poly-title-sheet.png');
    }

    create() {
        let bg = this.add.sprite(100, 100, 'title').setOrigin(0, 0);
    }
}