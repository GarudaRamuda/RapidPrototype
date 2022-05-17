class Player extends Phaser.Physics.Arcade.Sprite {
   constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      scene.physics.add.existing(this);

      this.isJumping = false;
   
   }
   update() {
      if(this.scene.physics.world.collide(this, this.scene.slugs)) {
         console.log("game over");
         this.scene.gameOver();
      }

      if (pointer.isDown && !this.isJumping) {
         this.isJumping = true;
         this.body.setVelocityY(-200);
      }
   
      if(this.body.velocity.y == 0 && this.isJumping) {
         console.log("landed");
         this.isJumping = false;
      }

   }
}