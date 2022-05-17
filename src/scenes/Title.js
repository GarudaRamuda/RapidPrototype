class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    
    }

    preload() {
        this.load.image('title', './assets/Title.png');
        this.load.image('tap1', './assets/Tap1.png');
        this.load.image('tap2', './assets/Tap2.png');
    }

    create() {
        let shadowDist = 3;
        this.bg = this.add.rectangle(0,0,this.scale.width,this.scale.height, 0x65c980).setScale(2);
        this.logoShadow = this.add.sprite(config.scale.width/2 + shadowDist, config.scale.height/3 + shadowDist, 'title').setOrigin(0.5, 0.5).setScale(0.5);
        this.logoShadow.setTint(0x000000);
        this.logoShadow.setAlpha(0.25);
        this.logo = this.add.sprite(config.scale.width/2, config.scale.height/3, 'title').setOrigin(0.5, 0.5).setScale(0.5);
        this.tap1 = this.add.sprite(config.scale.width - 100, config.scale.height - 100, 'tap1').setScale(0.25);
    }

    update(time) {
        this.logo.y += 0.06 * Math.sin(time / 500.0);
        this.logoShadow.y += 0.06 * Math.sin(time / 500.0);

        this.input.on("pointerdown", () => {
            this.scene.start("messageScene", {messageIndex: 0});
        });
    }
}