import {Bishop} from "./implementations/Bishop";
import {Colors} from "./Colors.ts";
import {Board} from "../../4widgets/board/Board.ts";
import {Figure} from "./Figure.ts";
import {Pawn} from "./implementations/Pawn.ts";

describe('Figure Tests', () => {
    describe('Bishop tests', () => {
        const fromFigure = new Bishop(Colors.BLACK, 0);
        const toFigure = new Bishop(Colors.WHITE, 1);
        const board = new Board();

        describe('Достижимые фигуры', () => {
            test('Фигура на диагонали перед Bishop', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 1,1)
                from.figure = fromFigure
                to.figure = toFigure

                expect(from.figure?.canMove(from, to)).toBe(true)
            })
        })

        describe('Недостижимые фигуры', () => {

            test('Фигура прямо перед Bishop', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 0,1)
                from.figure = fromFigure
                to.figure = toFigure

                expect(from.figure?.canMove(from, to)).toBe(false)
            })
            test('Фигура на диагонали перед Bishop', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 3,3)
                from.figure = fromFigure
                to.figure = toFigure

                board.getCell( 2,2).figure = new Figure(Colors.BLACK, 2);

                expect(from.figure?.canMove(from, to)).toBe(false)
            })
        })
    })

    describe('Pawn tests', () => {
        const fromFigure = new Pawn(Colors.BLACK, 0);
        const toFigure = new Pawn(Colors.WHITE, 1);
        const board = new Board();

        describe('Достижимые фигуры', () => {
            test('Фигура на диагонали перед Pawn', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 1,1)
                from.figure = fromFigure
                to.figure = toFigure

                expect(from.figure?.canMove(from, to)).toBe(true)
            })
        })

        describe('Недостижимые фигуры', () => {

            test('Фигура прямо перед Pawn', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 0,1)
                from.figure = fromFigure
                to.figure = toFigure

                expect(from.figure?.canMove(from, to)).toBe(false)
            })
            test('Фигура на 2 шага перед Pawn', () => {
                board.initCells();
                const from = board.getCell( 0,0)
                const to = board.getCell( 0,2)
                from.figure = fromFigure
                to.figure = toFigure

                expect(from.figure?.canMove(from, to)).toBe(false)
            })
            test('Шаг на 2 вперед, когда перед Pawn есть фигура', () => {
                board.initCells();
                const from = board.getCell( 7,1)
                const to = board.getCell( 7,3)
                from.figure = fromFigure

                board.getCell( 7,2).figure = toFigure;

                expect(from.figure?.canMove(from, to)).toBe(false)
            })
        })
    })
})
