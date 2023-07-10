import {Colors} from "./Colors.ts";
import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {Cell} from "../../6entities/cell/Cell.ts";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    QUEEN = "Ферзь",
    BISHOP = "Слон",
    KNIGHT = "Рыцарь",
    ROOK = "Ладья",
    PAWN = "Пешка",
}

export class Figure {
    color: Colors;
    icon: IconDefinition;
    name: FigureNames;
    id: number;

    constructor(color: Colors, id: number) {
        this.color = color;
        this.icon = faCheese;
        this.name = FigureNames.FIGURE;
        this.id = id;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    canMove(from: Cell, target: Cell): boolean {
        return target?.figure?.name !== FigureNames.KING
            && target?.figure?.color !== this.color;
    }

    moveFigure(from:Cell, target: Cell) {
        target.figure = this;
        from.figure = null;
    }
}