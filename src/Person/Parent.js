import React from 'react';
import './Person.css';

const parent = (props) => {
    return (
        <div>
            <h5 className="h5-css" onClick={props.click}> Hey I am {props.name} from Parent Component & my age is {props.age} </h5>
            <p>{props.children}</p>
        </div>
    )
}

export default parent;