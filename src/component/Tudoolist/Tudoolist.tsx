import React from 'react';
import Button from "./Button/Button";
import TuDooTytel from "./ToDooTytel/TuDooTytel";


type TudoolistPropsType = {
    tytel:string
}

const Tudoolist = (props:TudoolistPropsType) => {
    return (
        <div >
            <div>
                <TuDooTytel tytel={props.tytel}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>

                    <li><input type="checkbox" /> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" /> <span>JS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>React</span></li>
                </ul>
                <div>
                    <Button tytel={"All"}/>
                    <Button tytel={"add"}/>
                    <Button tytel={"delite"}/>


                </div>
            </div>
        </div>
    );
};

export default Tudoolist;


