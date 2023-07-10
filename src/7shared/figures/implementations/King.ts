import {Figure, FigureNames} from "../Figure.ts";
import {Colors} from "../Colors.ts";
import {faChessKing} from "@fortawesome/free-solid-svg-icons/faChessKing";
import {Cell} from "../../../6entities/cell/Cell.ts";

export class King extends Figure {

    constructor(color: Colors, id: number) {
        super(color, id);
        this.icon = faChessKing;
        this.name = FigureNames.KING;
    }

    canMove(from: Cell, target: Cell): boolean {
        if (!super.canMove(from, target))
            return false;

        return Math.abs(target.x - from.x) < 2
            && Math.abs(target.y - from.y) < 2;
    }
}