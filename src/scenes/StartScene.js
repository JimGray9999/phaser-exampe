import Phaser from 'phaser'

export default class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('start-scene')
    }

    preload()
    {
        this.input.on('pointerup', function() {
            this.scene.start('game-scene');
        }, this);

    }
}