import { Game } from "./core/game"
import { PlayerCommand } from "./services/player-command"

let playerCommand: PlayerCommand

function play() {
    const width = 10
    const height = 10
    
    const game = new Game(width, height)

    game.start()

    const gameInterval = setInterval(() => {
        try {
            console.log('\n')
    
            game.movement()
        
            playerCommand.requestMovement((d) => game.changeDirection(d))
        } catch (error) {
            clearInterval(gameInterval)
            playerCommand.close()
            start()
        }
    }, 2000)
}

function start() {
    playerCommand = new PlayerCommand()
    playerCommand.requestStart(play)
}

start()
