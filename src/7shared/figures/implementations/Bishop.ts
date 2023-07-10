import {Figure, FigureNames} from "../Figure.ts";
import {Colors} from "../Colors.ts";
import {faChessBishop} from "@fortawesome/free-solid-svg-icons/faChessBishop";
import {Cell} from "../../../6entities/cell/Cell.ts";

export class Bishop extends Figure {


    constructor(color: Colors, id: number) {
        super(color, id);
        this.icon = faChessBishop;
        this.name = FigureNames.BISHOP;
    }

    canMove(from: Cell, target: Cell): boolean {
        if (!super.canMove(from, target))
            return false;

        return from.isEmptyDiagonal(target);
    }
}