import React from 'react';
import style from "./Button.module.css"
import {filterValueType} from "../../../App";

type ButtonPropsType = {
    tytel: filterValueType,
    chengeFilter: (filter: filterValueType) => void,
    activ: boolean,
}

const Button: React.FC<ButtonPropsType> = ({tytel, chengeFilter, activ}) => {
    const onButonClick = () => {
        chengeFilter(tytel)
    }
    return (
        <button className={activ ? style.button : ""} onClick={onButonClick}>{tytel}</button>
    );
};
export default Button;