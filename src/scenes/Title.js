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
}