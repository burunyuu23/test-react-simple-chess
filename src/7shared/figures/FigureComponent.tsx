import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Figure} from "./Figure.ts";
import cl from "./Figure.module.css"
import {Player} from "../player/Player.ts";
interface FigureProps {
    figure: Figure;
    currentPlayer: Player | null;
}

const FigureComponent: FC<FigureProps> = ({figure, currentPlayer}) => {
    return (
        <FontAwesomeIcon className={[cl.figure, cl[`${figure.color}`], figure.color === currentPlayer?.color ? cl.friend : cl.enemy].join(' ')}
                         icon={figure.icon}/>
    );
};

export default FigureComponent;