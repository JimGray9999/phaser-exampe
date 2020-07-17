import Phaser from 'phaser'

export default class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('start-scene')
    }

    preload()
    {
        const startText = this.add.text(100,100, 'Phaser Game Example!');

        const pressButtonInstruction = this.add.text(200,200, 'Click mouse to begin')

        this.input.on('pointerup', function() {
            this.scene.start('game-scene');
        }, this);

    }
}