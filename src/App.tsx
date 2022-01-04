import React from 'react';
import './App.css';
import Tudoolist from "./component/Tudoolist/Tudoolist";
import {type} from "os";

function App() {
 const FirstTytel = "React";
 const SecondTytel = "Redux";

 type tuduTascsType = {
      id:number,
      tytel:string
      isDone:boolean
 }
 const tascs_1:Array<tuduTascsType>  =  [
     {id:1,tytel:"Js ES6",isDone:true},
     {id:1,tytel:"Html+Css",isDone:true},
     {id:1,tytel:"React",isDone:false}
 ]
const tascs_2:Array<tuduTascsType>  =  [
    {id:1,tytel:"Milk",isDone:true},
    {id:1,tytel:"Beer",isDone:true},
    {id:1,tytel:"Whisky",isDone:true}
]

    return (

        <div className={"App"}>
            <Tudoolist tytel={FirstTytel} />
            <Tudoolist tytel={`${SecondTytel}++${FirstTytel}`}/>
            <Tudoolist tytel={"Redux"}/>
        </div>
    );
}

export default App;
