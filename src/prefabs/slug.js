class Slug extends Phaser.Physics.Arcade.Sprite {

   constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      scene.physics.add.existing(this);

      this.body.allowGravity = false;
   }


   update() {
      this.body.setVelocityX(-100);

      if(this.scene.physics.world.collide(this, this.scene.player)) {
         this.scene.gameOver();
      }
   }

   gameOver() {
      this.body.setVelocityY(0);
      this.body.setVelocityX(0);
      this.body.setAccelerationX(0);
      this.body.setAccelerationY(0);
   }
}