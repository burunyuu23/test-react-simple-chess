import cl from "./Cell.module.css"
import {FC} from "react";
import {Cell} from "./Cell.ts";
import FigureComponent from "../../7shared/figures/FigureComponent.tsx";
import {Player} from "../../7shared/player/Player.ts";

interface CellProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void
    currentPlayer: Player | null;
}

const CellComponent: FC<CellProps> = ({cell, selected, click, currentPlayer}) => {
    // hi there!
    return (
        <div className={[cl.cell, cl[`${cell.color}`],
            selected ? cl.selected : cl.hover,
            (cell.available && cell.figure && cell.figure?.color !== currentPlayer?.color) ? cl.enemyAttack : ''].join(' ')}
             onClick={() => click(cell)}>
            {!cell.figure
                && cell.available
                && <div className={cl.available}/>}
            {cell.figure
                && <FigureComponent figure={cell.figure}
                                    currentPlayer={currentPlayer}/>}
        </div>
    );
};

export default CellComponent;