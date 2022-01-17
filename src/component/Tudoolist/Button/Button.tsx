import React from 'react';
import style from "./Button.module.css"
import {filterValueType} from "../../../App";

type ButtonPropsType ={
    tytel:filterValueType,
    chengeFilter: (filter:filterValueType)=> void
}

const Button:React.FC<ButtonPropsType>=({tytel,chengeFilter}) => {
    const onButonClick = ()=>{chengeFilter(tytel)}
    return (
        <button className={style.button} onClick={onButonClick}>{tytel}</button>
    );
};
export default Button;