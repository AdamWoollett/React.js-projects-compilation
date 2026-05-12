import { useState } from 'react';

let nextId = 0;

const DynamicForm=()=>{
    const[inputValue,setInputValue]=useState("");
    const[submittedValues,setSubmittedValues]=useState([]);
    const handleChange=(event)=>{
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
    const handleReset=()=>{
        setInputValue("");
        console.log("Form Reset");
    }
    /*const storeSubmittedValues=(inputValue)=>{
        setSubmittedValues(submittedValues => [...submittedValues, {inputValue}]);
        
        console.log(submittedValues);
    };*/
    return(
        <><div className="component">
            <h1>Dynamic Input form:</h1>
            <input type='text' value={inputValue} onChange={handleChange} placeholder="Type something here..."></input>
            <p>Current form input:{inputValue}</p>
            <p>Current form input length: {inputValue.length}</p>
            <button onClick={handleReset}>Reset form input</button>
            <button onClick={()=>{setSubmittedValues([...submittedValues,{id: nextId++, name: inputValue}])}}>Submit Values to List</button>
            <p>Submitted Values:</p>
            <ul>{submittedValues.map(inputValue=>(<li key={inputValue.id}>{inputValue.name}</li>))}</ul>
            {console.log(submittedValues)}
        </div></>
    );
};

export default DynamicForm