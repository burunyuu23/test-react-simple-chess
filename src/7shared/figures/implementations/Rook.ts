import {Figure, FigureNames} from "../Figure.ts";
import {Colors} from "../Colors.ts";
import {faChessRook} from "@fortawesome/free-solid-svg-icons/faChessRook";
import {Cell} from "../../../6entities/cell/Cell.ts";

export class Rook extends Figure {

    constructor(color: Colors, id: number) {
        super(color, id);
        this.icon = faChessRook;
        this.name = FigureNames.ROOK;
    }

    canMove(from: Cell, target: Cell): boolean {
        if (!super.canMove(from, target))
            return false;

        return from.isEmptyVertical(target)
            || from.isEmptyHorizontal(target);
    }
}