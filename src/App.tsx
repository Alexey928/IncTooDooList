import React, {useState} from 'react';
import './App.css';
import Tudoolist from "./component/Tudoolist/Tudoolist";
import {v1} from "uuid";



export  type tuduTascsType = {
    id: string,
    tytel: string
    isDone: boolean
}
export type filterValueType = "All" | "Active" | "Complited";


function App() {
    const FirstTytel = "Native WebDew";
    const [tasks, setTascs] = useState<Array<tuduTascsType>>([
        {id: v1(), tytel: "Js ES6", isDone: true},
        {id: v1(), tytel: "Html+Css", isDone: true},
        {id: v1(), tytel: "Jquery", isDone: false},
        {id: v1(), tytel: "Jquery", isDone: true},
        {id: v1(), tytel: "Jquery", isDone: false},
        {id: v1(), tytel: "Jquery", isDone: true},
    ]);
    const remuveTask = (id: string) => {
        const filteredTask = tasks.filter(t => t.id !== id)
        setTascs(filteredTask)
    }
    const addTask = (inpVal:string)=>{
        const newTasc: tuduTascsType = {id:v1(),tytel:inpVal,isDone:false}
        const updateTascs :Array<tuduTascsType> = [newTasc, ...tasks]
        setTascs(updateTascs);
    }

    const [filter, setfilter] = useState<filterValueType>("All")


    const chengeFilter = (filter: filterValueType) => {
        setfilter(filter)
    }

    const getTasksForRender = () => {
        switch (filter) {
            case "Active":
                return tasks.filter(t => !t.isDone)
            case "Complited":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const taskForRender = getTasksForRender()

    return (
        <div className={"App"}>
            <Tudoolist tytel={FirstTytel} tascs={taskForRender} remuveTask={remuveTask} chengeFilter={chengeFilter} addTasc = {addTask}/>
        </div>)
}

export default App;
