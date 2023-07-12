import {Cell} from "../../6entities/cell/Cell.ts";
import {Colors} from "../../7shared/figures/Colors.ts";
import {Queen} from "../../7shared/figures/implementations/Queen.ts";
import {King} from "../../7shared/figures/implementations/King.ts";
import {Bishop} from "../../7shared/figures/implementations/Bishop.ts";
import {Knight} from "../../7shared/figures/implementations/Knight.ts";
import {Rook} from "../../7shared/figures/implementations/Rook.ts";
import {Pawn} from "../../7shared/figures/implementations/Pawn.ts";
import {Figure} from "../../7shared/figures/Figure.ts";

export class Board {
    cells: Cell[][] = []
    lostBlackFigures: Figure[] = []
    lostWhiteFigures: Figure[] = []

    public initCells() {
        for (let y = 0; y < 8; y++) {
            const row: Cell[] = []
            for (let x = 0; x < 8; x++) {
                if ((y + x) % 2)
                    row.push(new Cell(this, x, y, Colors.BLACK, null)) // Black cell
                else
                    row.push(new Cell(this, x, y, Colors.WHITE, null)) // White cell
            }
            this.cells.push(row)
        }
    }

    public getCell(x: number, y: number): Cell {
        return this.cells[y][x]
    }

    private addKings() {
        this.cells[0][4].figure = new King(Colors.BLACK, this.cells[0][4].id)
        this.cells[7][4].figure = new King(Colors.WHITE, this.cells[7][4].id)

    }

    private addQueens() {
        this.cells[0][3].figure = new Queen(Colors.BLACK, this.cells[0][3].id)
        this.cells[7][3].figure = new Queen(Colors.WHITE, this.cells[7][3].id)
    }

    private addBishops() {
        this.cells[0][2].figure = new Bishop(Colors.BLACK, this.cells[0][2].id)
        this.cells[7][2].figure = new Bishop(Colors.WHITE, this.cells[7][2].id)

        this.cells[0][5].figure = new Bishop(Colors.BLACK, this.cells[0][5].id)
        this.cells[7][5].figure = new Bishop(Colors.WHITE, this.cells[7][5].id)
    }

    private addPawns() {
        for (let x = 0; x < 8; x++) {
            this.cells[1][x].figure = new Pawn(Colors.BLACK, this.cells[1][x].id)
            this.cells[6][x].figure = new Pawn(Colors.WHITE, this.cells[6][x].id)
        }
    }

    private addKnights() {
        this.cells[0][1].figure = new Knight(Colors.BLACK, this.cells[0][1].id)
        this.cells[7][1].figure = new Knight(Colors.WHITE, this.cells[7][1].id)

        this.cells[0][6].figure = new Knight(Colors.BLACK, this.cells[0][6].id)
        this.cells[7][6].figure = new Knight(Colors.WHITE, this.cells[7][6].id)
    }

    private addRooks() {
        this.cells[0][0].figure = new Rook(Colors.BLACK, this.cells[0][0].id)
        this.cells[7][0].figure = new Rook(Colors.WHITE, this.cells[7][0].id)

        this.cells[0][7].figure = new Rook(Colors.BLACK, this.cells[0][7].id)
        this.cells[7][7].figure = new Rook(Colors.WHITE, this.cells[7][7].id)
    }

    public addFigures() {
        this.addKings()
        this.addQueens()
        this.addBishops()
        this.addKnights()
        this.addPawns()
        this.addRooks()
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                console.log(`Клетка на позиции (${j};${i})`)
                console.log(selectedCell)
                console.log(target)
                target.available = !!selectedCell?.figure?.canMove(selectedCell, target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigures = this.lostWhiteFigures
        newBoard.lostBlackFigures = this.lostBlackFigures
        return newBoard;
    }
}