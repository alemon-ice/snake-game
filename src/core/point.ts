export class Point {
    private _count: number = 0
    private _positionX: number = 0
    private _positionY: number = 0
    private _limitX: number
    private _limitY: number

    constructor({ limitX, limitY }: {
        limitX: number
        limitY: number
    }) {
        this._limitX = limitX
        this._limitY = limitY

        this.randomPosition()
    }

    public get position() {
        return { x: this._positionX, y: this._positionY }
    }

    public get count(): number {
        return this._count
    }

    public randomPosition() {
        this._positionX = Math.floor(Math.random() * this._limitX)
        this._positionY = Math.floor(Math.random() * this._limitY)

        console.log('\nPoint position: ', this.position)
    }

    public matchPosition(snakePosition: { x: number; y: number }) {
        const positionMatch = (
            snakePosition.x === this.position.x &&
            snakePosition.y === this.position.y
        )

        if (positionMatch) {
            this._increment()
            this.randomPosition()
        }
    }

    private _increment() {
        this._count++

        console.log('\nPoint incremented!')
        console.log('Total: ', this._count)
    }
}