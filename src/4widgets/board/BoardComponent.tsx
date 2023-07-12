import cl from "./Board.module.scss"
import React, {FC, useEffect, useState} from "react";
import {Board} from "./Board.ts";
import CellComponent from "../../6entities/cell/CellComponent.tsx";
import {Cell} from "../../6entities/cell/Cell.ts";
import {Player} from "../../7shared/player/Player.ts";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer,swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell !== cell) {
            if (selectedCell && selectedCell.figure?.canMove(selectedCell, cell)) {
                selectedCell.moveFigure(cell)
                swapPlayer()
                setSelectedCell(null)
            } else if (cell?.figure?.color === currentPlayer?.color)
                setSelectedCell(cell)
            else
                setSelectedCell(null)
        } else
            setSelectedCell(null)
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className={cl.board}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((cell) =>
                        <CellComponent
                            click={click}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            currentPlayer={currentPlayer}
                            cell={cell}
                            key={cell.id}/>
                    )}
                </React.Fragment>
            )

            }
        </div>
    );
};

export default BoardComponent;