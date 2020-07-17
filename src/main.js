import Phaser from 'phaser'
import GameScene from './scenes/GameScene'
import StartScene from './scenes/StartScene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	scene: [StartScene, GameScene]
}

export default new Phaser.Game(config)
