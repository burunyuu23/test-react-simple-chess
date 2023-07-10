import {FC} from 'react';
import {Figure} from "../../7shared/figures/Figure.ts";
import FigureComponent from "../../7shared/figures/FigureComponent.tsx";
import cl from "./LostFiguresList.module.css"

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}
const LostFiguresListComponent: FC<LostFiguresProps> = ({title,figures}) => {
    return (
        <div className={cl.panel}>
            <h1>{title}</h1>
            <div className={cl.panel__content}>
                {figures.map(figure =>
                    <div className={cl.element}>
                        <h1>{figure.name}</h1>
                        <FigureComponent
                            key={figure.id}
                            currentPlayer={null}
                            figure={figure}/>
                    </div>
                )}
            </div>
        </div>
    );
};
export default LostFiguresListComponent;