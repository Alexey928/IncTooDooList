import React from 'react';
type ToDooListTytelPropsType={
    tytel:string
}
const TuDooTytel = (props:ToDooListTytelPropsType) => {
    return (
        <h3>
            {props.tytel}
        </h3>
    );
};

export default TuDooTytel;