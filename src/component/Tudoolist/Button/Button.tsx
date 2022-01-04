import React from 'react';
type ButtonPropsType ={
    tytel:string
}

const Button = (props:ButtonPropsType) => {
    return (
        <button>{props.tytel}</button>
    );
};
export default Button;