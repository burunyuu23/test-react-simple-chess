import BoardComponent from "../../4widgets/board/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "../../4widgets/board/Board.ts";
import {Player} from "../../7shared/player/Player.ts";
import {Colors} from "../../7shared/figures/Colors.ts";
import cl from "./ChessPage.module.css"
import LostFiguresListComponent from "../../6entities/lost_figures_list/LostFiguresListComponent.tsx";

const ChessPage = () => {

    const [board, setBoard] = useState<Board>(new Board())
    const [whitePlayer] = useState<Player>(new Player(Colors.WHITE))
    const [blackPlayer] = useState<Player>(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
        setCurrentPlayer(whitePlayer)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div>
            <div className={cl.game}>
                <LostFiguresListComponent title="Белые фигуры"
                                          figures={board.lostWhiteFigures}/>
                <div className={cl.gameField}>
                    <h1>Текущий игрок: {currentPlayer?.color}</h1>
                    <BoardComponent board={board}
                                    setBoard={setBoard}
                                    currentPlayer={currentPlayer}
                                    swapPlayer={swapPlayer}/>
                </div>
                <LostFiguresListComponent title="Чёрные фигуры"
                                          figures={board.lostBlackFigures}/>
            </div>
        </div>
    );
};

export default ChessPage;