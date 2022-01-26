import React, {ChangeEvent} from 'react';
import {tuduTascsType} from "../../../App";

type TascsPropsType = tuduTascsType & {
    remuveTask: (t: string) => void;
    chengeTascStatus: (TasckID: string, isDone: boolean) => void
}

const Tasc: React.FC<TascsPropsType> = ({
    id,
    tytel,
    isDone,
    remuveTask,
    chengeTascStatus
}) => {

    const onButtonClickRemuver = () => {
        remuveTask(id)
    };
    const chengeTascStatusColbac = (e: ChangeEvent<HTMLInputElement>) => {
        chengeTascStatus(id, e.currentTarget.checked)
    };
    return (
        <li className={isDone ? "isDone" : ""}>
            <button onClick={onButtonClickRemuver}>X
            </button>
            < input type="checkbox" checked={isDone} onChange={chengeTascStatusColbac}/>
            <span>{tytel}</span>
        </li>
    );
};

export default Tasc;