import React from 'react';
import style from "./TodoListHeader.module.css"
type ToDooListTytelPropsType={
    tytel:string
}


const ToodooListHeader:React.FC<ToDooListTytelPropsType> = ({tytel}) => {
    return (
        <h3 className={style.header}>
            {tytel}
        </h3>
    );
};

export default ToodooListHeader;