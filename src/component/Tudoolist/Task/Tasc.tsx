import React from 'react';
import {tuduTascsType} from "../../../App";

type TascsPropsType = tuduTascsType & {
    remuveTask: (t: string) => void;
}

const Tasc: React.FC<TascsPropsType> = ({
    id,
    tytel,
    isDone,
    remuveTask
    }) => {

    const onButtonClickRemuver = () => {remuveTask(id)}
    return (
        <li>
            <button onClick={onButtonClickRemuver}>X
            </button>
            < input type="checkbox" checked={isDone}/>
            <span>{tytel}</span>
        </li>
    );
};

export default Tasc;