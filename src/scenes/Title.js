class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    preload() {
        this.load.image('title', './assets/Title.png');
    }

    create() {
        this.bg = this.add.rectangle(0,0,this.scale.width,this.scale.height, 0x65c980).setScale(2);
        this.logo = this.add.sprite(config.scale.width/2, config.scale.height/3, 'title').setOrigin(0.5, 0.5).setScale(0.5);
    }

    update(time) {
        this.logo.y += 0.1 * Math.sin(time / 500.0);
    }
}