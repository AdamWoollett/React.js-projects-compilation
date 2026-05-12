import React from 'react'

const JobFormButton = ({value, selectCategory,selected, setNotificatioVisibility, submitButtonControl}) => {
    //Creating an object that stores different values for different button CSS
    const addCSStoButton={
        ReadEmails:{backgroundColor:"orange"},
        WebParsing:{backgroundColor:"red"},
        SendEmails:{backgroundColor:"blue"},
        default:{backgroundColor:"white"}
    }
  return (
    <div>
      <button type="button" onClick={()=>{selectCategory(value); setNotificatioVisibility('hidden'); submitButtonControl();}} style={selected ? addCSStoButton[value]:value.default}>{value}</button>
    </div>
  )
}

export default JobFormButton
