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
    chengeTascStatus:(TasckID:string,isDone:boolean)=>void,
    fileter:filterValueType,
}

const Tudoolist:React.FC<TudoolistPropsType> = ({
     tytel,
     tascs,
     remuveTask,
     chengeFilter,
     addTasc,
     chengeTascStatus,
     fileter
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
                    remuveTask = {remuveTask}
                    chengeTascStatus = { chengeTascStatus}/>
                )}
            </ul>
            <div>
                <Button tytel={"All"} chengeFilter = {chengeFilter} activ = {fileter==="All"}/>
                <Button tytel={"Active"} chengeFilter = {chengeFilter} activ = {fileter==="Active"}/>
                <Button tytel={"Complited"} chengeFilter = {chengeFilter} activ = {fileter==="Complited"}/>
            </div>
        </div>

    );
};

export default Tudoolist;


