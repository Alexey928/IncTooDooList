import React, {useState} from 'react';

type addtascPropsType = {
    addTasc: (inpVal:string) => void
}

const AddTasc = (props: addtascPropsType) => {

    const [inpVall, SetInpVall] = useState<string>("");

    const onClikAddTasck = () => {
        props.addTasc(inpVall)
        SetInpVall(" ")
    }
    const onKeyPress = (e:any)=>{// протипизировать e < на дом см.  >!!!
        e.key ==="Enter"&&onClikAddTasck()
    }
    const onChengeInpuVall =(e:any) => {
        SetInpVall(e.currentTarget.value)
    }

    return (
        <div>
            <input value={inpVall}
                   onKeyPress={onKeyPress}
                   onChange={onChengeInpuVall}/>
            <button onClick={onClikAddTasck}>++</button>
        </div>
    );
};

export default AddTasc;