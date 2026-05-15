import React from 'react'
import {useState} from 'react'

const TicketInfo = ({ Image, TicketStatus, children, TicketCount, TicketInfo}) => {
  const [ticketShow,setTicketShow]=useState(false)
  return (
    <div className={`${TicketStatus}`}>
      <h3>{TicketStatus} Tickets</h3>
      <img src={Image} alt="Completed" width="200" />
      {children}
      <p>Ticket Count: {TicketCount}</p>
      <button onClick={()=>setTicketShow(!ticketShow)}>Click to hide/show ticket info</button>
      {ticketShow ? <p>Ticket names: {TicketInfo}</p> : null}
    </div>
  )
}

export default TicketInfo
