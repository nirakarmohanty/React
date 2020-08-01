import React from 'react';
import './Person.css';

const person = (props) => {
    return(
    
        <div>
        <h5 className="h5-css"> Hey I am {props.name} from Person Component & my age is {props.age} </h5>
        <p>{props.children}</p>
        </div>
    
    )

}

export default person;