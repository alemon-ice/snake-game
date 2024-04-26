import { Board } from "./board"
import { Point } from "./point"
import { Direction, Snake } from "./snake"

export type GameStatus = 'NOT_STARTED' | 'STARTED' | 'FINISHED'

export class Game {
    private _board: Board
    private _snake: Snake
    private _point: Point
    private _status: GameStatus = 'NOT_STARTED'

    constructor(width = 500, height = 500) {
        this._board = new Board({ width, height })

        const { x, y } = this._board.centralPosition

        this._snake = new Snake({
            positionX: x,
            positionY: y,
            direction: 'right'
        })

        this._point = new Point({ limitX: width, limitY: height })
    }

    public get status() {
        return this._status
    }

    public start() {
        this._status = 'STARTED'

        console.log('\nGame started!')
    }

    public movement() {
        this._snake.move()
        this._checkSnakePosition()
        
        console.log('Snake moved!')
        console.log('Position: ', this._snake.position)

        this._point.matchPosition(this._snake.position)
    }

    public changeDirection(direction: Direction) {
        const { changed } = this._snake.changeDirection(direction)

        if (changed) console.log('Direction changed!')
    }

    private _gameOver() {
        this._status = 'FINISHED'

        console.log('Game over!')
        console.log('Total points accumulated: ', this._point.count)

        throw { error: 'GAME_OVER' }
    }

    private _isWithinTheLimit({ position, min, max }: {
        position: number
        min: number
        max: number
    }) {
        return position >= min && position < max
    }

    private _checkSnakePosition() {
        const { x, y } = this._snake.position
        const { width, height } =  this._board.size

        if (!this._isWithinTheLimit({ position: x, min: 0, max: width })) {
            this._gameOver()
            return
        }
        if (!this._isWithinTheLimit({ position: y, min: 0, max: height })) {
            this._gameOver()
            return
        }
    }
}