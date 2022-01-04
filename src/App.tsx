import React from 'react';
import './App.css';
import Tudoolist from "./component/Tudoolist/Tudoolist";
//import {type} from "os";


export  type tuduTascsType = {
    id: number,
    tytel: string
    isDone: boolean
}

function App() {
    const FirstTytel = "React";
    const SecondTytel = "Redux";


    const tascs_1: Array<tuduTascsType> = [
        {id: 1, tytel: "Js ES6", isDone: true},
        {id: 1, tytel: "Html+Css", isDone: true},
        {id: 1, tytel: "React", isDone: false}
    ]
    const tascs_2: Array<tuduTascsType> = [
        {id: 1, tytel: "Milk", isDone: true},
        {id: 1, tytel: "Beer", isDone: true},
        {id: 1, tytel: "Whisky", isDone: true}
    ]
    const tascs_3:Array<tuduTascsType> = [
        {id: 1, tytel: "combineReduser", isDone: true},
        {id: 1, tytel: "Reduser", isDone: true},
        {id: 1, tytel: "Store", isDone: true}
    ]


    return <div className={"App"}>
        <Tudoolist tytel={FirstTytel} tascs={tascs_1}/>
        <Tudoolist tytel={`${SecondTytel}++${FirstTytel}`} tascs={tascs_2}/>
        <Tudoolist tytel={"Redux"} tascs={tascs_3}/>
    </div>;
}

export default App;
