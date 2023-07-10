import {Figure, FigureNames} from "../Figure.ts";
import {Colors} from "../Colors.ts";
import {faChessKnight} from "@fortawesome/free-solid-svg-icons/faChessKnight";
import {Cell} from "../../../6entities/cell/Cell.ts";

export class Knight extends Figure {

    constructor(color: Colors, id: number) {
        super(color, id);
        this.icon = faChessKnight;
        this.name = FigureNames.KNIGHT;
    }

    canMove(from: Cell, target: Cell): boolean {
        if (!super.canMove(from, target))
            return false;

        const dx = Math.abs(from.x - target.x)
        const dy = Math.abs(from.y - target.y)

        return (dx === 1 && dy === 2)
            || (dx === 2 && dy === 1)
    }
}