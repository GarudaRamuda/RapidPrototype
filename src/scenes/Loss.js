class Loss extends Phaser.Scene {
    constructor() {
        super("lossScene");
    }
    create() {
        this.textConfig = {
            fontFamily: "Impact",
            fontSize: "32px",
            color: "#00FF00",
        }

        this.add.text(game.config.width/2, game.config.height/2, "You lost!", this.textConfig);
    }

}