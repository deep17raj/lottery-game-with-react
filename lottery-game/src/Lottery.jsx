import { useState } from "react"
import {getTicket,sum} from "./helper.js"
import Ticket from "./Ticket"

export default function Lottery({n,winCondition}){
    let[ticket,setTicket] = useState(getTicket(n))

    let newTicket = ()=>{
        setTicket(getTicket(n))
    }

    let isWin = winCondition(ticket)
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div> <br />
            <button onClick={newTicket}>Get new Ticket</button>

            <h3>{isWin&& " Congratulations! You Won"}</h3>
        </div>
    )
}