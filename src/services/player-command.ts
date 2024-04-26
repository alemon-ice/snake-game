import readline from "readline"
import { Direction } from "../core/snake"

export class PlayerCommand {
    private _readline = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    public requestMovement(onPressKeyCb: (direction: Direction) => void) {
        this._readline.question("\nSet the snake's direction with A, S, D, and W: ", (direction) => {
            switch(direction.toUpperCase()) {
                case 'A':
                    onPressKeyCb('left')
                    break
                case 'S':
                    onPressKeyCb('down')
                    break
                case 'D':
                    onPressKeyCb('right')
                    break
                case 'W':
                    onPressKeyCb('top')
                    break
            }
        })
    }

    public requestStart(onPressEnterCb: () => void) {
        this._readline.question("\nPressione 'ENTER' para iniciar", () => {
            onPressEnterCb()
        })
    }

    public close() {
        this._readline.close()
    }
}