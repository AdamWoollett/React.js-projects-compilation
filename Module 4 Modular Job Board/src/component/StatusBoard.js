import React from 'react'
import CompletedImage from '../images/CompletedEdited.png'
import InProgressImage from '../images/In_progress.png'
import FailedImage from '../images/Failed.png'
import TicketInfo from './TicketInfo.js'

const StatusBoard = () => {
    return (
        <div className="StatusBoard">
            <TicketInfo Image={CompletedImage} TicketStatus="Completed" TicketCount="10" TicketInfo="Jess, Bob, Jerry, Thomas, Steve, Alex, William, Michael, Sam, Isaac">
                <p>Tickets that have been completed</p>
            </TicketInfo>
            <TicketInfo Image={InProgressImage} TicketStatus="InProgress" TicketCount="5" TicketInfo="Walker, Adams, Lugo, Konrad, Riggs">
                <p>Tickets currently in progress</p>
            </TicketInfo>
            <TicketInfo Image={FailedImage} TicketStatus="Failed" TicketCount="2" TicketInfo="Garfield, Jon">
                <p>Tickets that have failed</p>
            </TicketInfo>
        </div>
    )
}

export default StatusBoard
