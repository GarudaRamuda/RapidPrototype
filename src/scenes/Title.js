class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    
    }

    create() {
        this.titleTextConfig = {
    
        }
        this.input.on("pointerdown", () => {
            this.scene.start("messageScene", {messageIndex: 0});
        });

    }

    preload() {
        this.load.image('title', './assets/roly-poly-title-sheet.png');
    }

    create() {
        let bg = this.add.sprite(100, 100, 'title').setOrigin(0, 0);
    }
}