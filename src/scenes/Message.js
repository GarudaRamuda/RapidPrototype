class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    init(data) {
        this.text = messages[data.messageIndex].text;
        this.targetSceneKey = messages[data.messageIndex].target;
        this.currMessageIndex = data.messageIndex;
    }

    create() {
        this.textConfig = {
            fontFamily: "Impact",
            fontSize: "32px",
            color: "#00FF00",
        }

        this.add.text(game.config.width/2, game.config.height/2, this.text, this.textConfig).setOrigin(0.5);

        this.input.on("pointerdown", () => {
            this.scene.start(this.targetSceneKey, {messageIndex: this.currMessageIndex + 1});
        });
    }
}