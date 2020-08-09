import React from 'react';
import './Person.css';
import styled from 'styled-components'

const StyledDiv = styled.div`

    width: 40%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;   
  
    '@media(min-width:500px)': {
        width: '400px'
    }
}`;

const ButtonStyled = styled.button`
    background-color: ${props => props.conditionalCssProps ? 'wheat':'lightBlue' };
    color: black ;
    font:  inherit ;
    border:  1px solid blue ;
    padding:  8px ;
    cursor:  pointer ;
    margin-right:  5px ;
    margin-top: 15px;    
    }
   &:hover{
    background-color: ${props => props.conditionalCssProps ? 'violet':'lightGreen' };
    color: mintcream;
    }    

`;



const person = (props) => {
    // const stylePerson = {
    //     '@media(min-width:500px)': {
    //         width: '400px'
    //     }
    // };
    const ageFlag = props.age %2 ===0 ? true :false;
    debugger;
    return (
        // <div className="Person" style={stylePerson}>
        <StyledDiv>
            <h5 onClick={props.click}> Hey I am {props.name} from Person Component & my age is {props.age} </h5>
            <p>{props.children}</p>
            {/* Two Way binding */}
            <input type="text" onChange={props.changed} value={props.name} />
            <br></br>
            <ButtonStyled conditionalCssProps ={ageFlag}> Person </ButtonStyled>
            {/* <button className="person_btnStyle"> Person </button> */}
        </StyledDiv>
        // </div>
    )

}

export default person;