export class Board {
    private _width: number
    private _height: number

    constructor({ width, height }: {
        width: number
        height: number
    }) {
        this._width = width
        this._height = height
    }

    public get centralPosition(): { x: number, y: number } {
        return {
            x: Math.floor(this._width / 2),
            y: Math.floor(this._height / 2),
        }
    }

    public get size() {
        return { width: this._width, height: this._height }
    }
}