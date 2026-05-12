import { useState } from 'react';
/*let buttonDisabler = false;*/
/*const buttonStyle = {backgroundColor:'aqua', color:'red', padding:'20px', border:'solid 4px violet', borderRadius:'8px'}style={buttonStyle} */
const headingStyle = {color:'blue', textAlign:'center', backgroundColor:'aqua'}
const StyledButton = () =>{
    let [buttonDisabler, setbuttonDisabler]=useState(false);
    function disableMe(){
        setbuttonDisabler(true);
    }
    return(
        <><div className="component">
            <h1 style={headingStyle}>Below here is a button:</h1>
            <button disabled={buttonDisabler} className='buttonOfClicking' onClick={disableMe}>Click to disable this button</button>
        </div></>
    )
};

/*function disableMe(){
    buttonDisabler = true;
    console.log(buttonDisabler);
    let buttonAcquired = document.getElementsByClassName('buttonOfClicking');
    buttonAcquired.setAttribute('disabled', buttonDisabler)};*/

export default StyledButton