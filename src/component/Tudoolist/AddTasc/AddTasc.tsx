import React, {ChangeEvent, useState} from 'react';

type addtascPropsType = {
    addTasc: (inpVal: string) => void

}

const AddTasc = (props: addtascPropsType) => {

    const [inpVall, SetInpVall] = useState<string>("");
    const [eror,setEror] = useState <boolean> (false)

    const onClikAddTasck = () => {
        let trimvall = inpVall.trim()
        if (trimvall) {
            props.addTasc(trimvall)
            SetInpVall(" ")
        }else{
        SetInpVall(" ")
        setEror(true)
        }
    }
    const onKeyPress = (e: any) => {// протипизировать e < на дом см.  >!!!
        e.key === "Enter" && onClikAddTasck()
    }
    const onChengeInpuVall = (e: ChangeEvent<HTMLInputElement>) => {
        SetInpVall(e.currentTarget.value)
        setEror(false)
    }


    return (
        <div>
            <input className={eror? "eror" : ""}
                    value={inpVall}
                   onKeyPress={onKeyPress}
                   onChange={onChengeInpuVall}/>
            <button onClick={onClikAddTasck}>++</button>
            {eror&&<div style={{color:"red"}}>eror</div>}
        </div>
    );
};

export default AddTasc;