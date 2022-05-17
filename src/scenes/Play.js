class Play extends Phaser.Scene {

   constructor() {
      super("Play");
   }

   preload() {

   }

   create() {
      this.win = false;
      this.gameover = false;

      // Player
      this.player = new Player(this, config.width / 4, config.height - 30, 'player');
      this.player.setCollideWorldBounds(true);

      this.slugs = this.add.group({
         classType: Slug,
         runChildUpdate: true
      });

      // Slugs
      this.slug1 = new Slug(this, config.width, config.height - 32, 'slug');
      this.slug2 = new Slug(this, config.width + 200, config.height - 32, 'slug');
      this.slugs.add(this.slug1);
      this.slugs.add(this.slug2);
      
      // Ground
      this.floor = this.add.tileSprite(0, game.config.height - 16, game.config.width * 1, 32, 'floor').setOrigin(0,0);
      this.floor.tileScaleX = .5;
      this.floor.tileScaleY = .5;
      this.physics.add.existing(this.floor, true);
      this.floor.body.immovable = true;

      this.physics.add.collider(this.player, this.floor);

      // touch pointer
      pointer = this.input.activePointer;

      this.cameras.main.on(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.restart();
        })

   }

   update() {

      if (!this.gameover) {
         this.floor.tilePositionX +=2;
         // Player update
         this.player.update();

         if (this.slug2.body.x < -32 && !this.win) {
            this.win = true;
            this.gameOver();
         }
      }

   }

   gameOver() {
      console.log("game over");
      this.gameover = true;
      this.add.text(game.config.width/2, game.config.height/2, this.win ? "You won!":"You lost!").setOrigin(0.5);
      this.cameras.main.fade(2000,0,0,0);
      this.physics.world.pause();
   }
}
