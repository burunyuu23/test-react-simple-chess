import {Figure, FigureNames} from "../Figure.ts";
import {Colors} from "../Colors.ts";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons/faChessPawn";
import {Cell} from "../../../6entities/cell/Cell.ts";

export class Pawn extends Figure {

    isFirstStep = true;

    constructor(color: Colors, id: number) {
        super(color, id);
        this.icon = faChessPawn;
        this.name = FigureNames.PAWN;
    }

    canMove(from: Cell, target: Cell): boolean {
        if (!super.canMove(from, target))
            return false;

        const direction = this.color === Colors.BLACK ? 1 : -1

        if ((target.x === from.x
                && from.board.getCell(target.x, target.y).isEmpty())
            || (target.x === from.x - 1 || target.x === from.x + 1)
            && !from.board.getCell(target.x, target.y).isEmpty()) {
            if (target.y === from.y + direction)
                return true
            else if (from.board.getCell(target.x, target.y).isEmpty() && this.isFirstStep && (target.y === from.y + direction * 2))
                return true
        }
        return false
    }

    moveFigure(from:Cell, target:Cell) {
        super.moveFigure(from, target);
        this.isFirstStep = false;
    }
}