class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    init(data) {
        //this.text = data.text;
        this.text = messages[data.messageIndex];
    }

    create() {
        this.textConfig = {
            fontFamily: "Impact",
            fontSize: "32px",
            color: "#00FF00",
        }

        this.add.text(game.config.width/2, game.config.height/2, this.text, this.textConfig);

        this.input.on("pointerdown" () => {
            this.scene.start("playScene", {messageIndex: 1});
        });
    }
}