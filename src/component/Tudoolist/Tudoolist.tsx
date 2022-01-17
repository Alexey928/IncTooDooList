import React, {FC} from 'react';
import Button from "./Button/Button";
import ToodooListHeader from "./TuodoListHeader/ToodooListHeader";
import {filterValueType, tuduTascsType} from "../../App";
import Tasc from "./Task/Tasc";
import AddTasc from "./AddTasc/AddTasc";

type TudoolistPropsType = {
    tytel: string
    tascs: Array<tuduTascsType>
    remuveTask:(id:string)=> void //!!!! <---t exept id
    chengeFilter:(filter:filterValueType)=> void
    addTasc:(inpVal:string)=> void

}

const Tudoolist:React.FC<TudoolistPropsType> = ({
     tytel,
     tascs,
     remuveTask,
    chengeFilter,
    addTasc
                }) => {

    return (
        <div>
            <ToodooListHeader tytel={tytel}/>
            <AddTasc addTasc ={addTasc} />
            <ul>
                {tascs.map((t) => <Tasc
                    key={t.id}
                    id={t.id}
                    tytel={t.tytel}
                    isDone={t.isDone}
                    remuveTask = {remuveTask}/>
                )}
            </ul>
            <div>
                <Button tytel={"All"} chengeFilter = {chengeFilter}/>
                <Button tytel={"Active"} chengeFilter = {chengeFilter}/>
                <Button tytel={"Complited"} chengeFilter = {chengeFilter}/>
            </div>
        </div>

    );
};

export default Tudoolist;


