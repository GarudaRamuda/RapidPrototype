class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    
    }

    preload() {
        this.load.image('title', './assets/roly-poly-title-sheet.png');
    }

    create() {
        this.titleTextConfig = {
            fontFamily: "Impact",
            fontSize: "32px",
            color: "#00FF00",
        }

        this.input.on("pointerdown", () => {
            this.scene.start("messageScene", {messageIndex: 0});
        });
        let bg = this.add.sprite(100, 100, 'title').setOrigin(0, 0);
    }
}