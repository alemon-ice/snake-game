export type Direction = 'top' | 'right' | 'down' | 'left'
type Orientation = 'horizontal' | 'vertical'

export class Snake {
    private _positionX: number
    private _positionY: number
    private _direction: Direction

    constructor({ positionX, positionY, direction }: {
        positionX: number
        positionY: number
        direction: Direction
    }) {
        this._positionX = positionX
        this._positionY = positionY
        this._direction = direction
    }

    public get position() {
        return { x: this._positionX, y: this._positionY }
    }

    private get currentOrientation(): Orientation {
        switch (this._direction) {
            case 'top':
            case 'down':
                return 'vertical'
            case 'right':
            case 'left':
                return 'horizontal'
        }
    }

    public changeDirection(direction: Direction) {
        let changed = false
        switch (direction) {
            case 'top':
            case 'down':
                if (this.currentOrientation === 'horizontal') {
                    this._direction = direction
                    changed = true
                }
                break
            case 'right':
            case 'left':
                if (this.currentOrientation === 'vertical') {
                    this._direction = direction
                    changed = true
                }
                break
        }
        return { changed }
    }

    public move() {
        switch (this._direction) {
            case 'top':
                this._positionY += 1
                break
            case 'right':
                this._positionX += 1
                break
            case 'down':
                this._positionY -= 1
                break
            case 'left':
                this._positionX -= 1
                break
        }
    }
}