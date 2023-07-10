import {Colors} from "../../7shared/figures/Colors.ts";
import {Figure} from "../../7shared/figures/Figure.ts";
import {Board} from "../../4widgets/board/Board.ts";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    readonly board: Board;
    figure: Figure | null;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = Number('' + x + y);
    }

    addLostFigure(figure: Figure) {
        console.log(figure)
        figure.color === Colors.BLACK
        ?
        this.board.lostBlackFigures.push(figure)
            :
            this.board.lostWhiteFigures.push(figure)
    }

    moveFigure(target: Cell) {
        if (this.figure?.canMove(this, target)) {
            if (target.figure)
                this.addLostFigure(target.figure)
            this.figure?.moveFigure(this, target)
        }
    }

    isEmpty() {
        return this.figure === null;
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x)
            return false;

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y)
            return false;

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyDiagonal(target: Cell) : boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        if (absY !== absX)
            return false;

        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty())
                return false;
        }
        return true;
    }
}