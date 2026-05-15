import React from 'react'
import Logo from "../component/Fake_Bank_Logo_2.png"

const header = () => {
    return (
        <div className="headerDiv">
            <img src={Logo} alt="Page Logo"></img>
            <h1>Welcome to the Modular Job Board application</h1>
        </div>
    )
}

export default header
