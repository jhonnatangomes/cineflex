import { useState } from "react";

export default function Seat({ number, isAvailable, seatId, buyerInfo, ticketOrder }) {

    const [seatClass, setSeatClass] = useState(isAvailable ? "seat available-color" : "seat unavailable-color");

    function selectSeat() {
        if(isAvailable){
            if(seatClass === "seat available-color") {
                setSeatClass("seat selected-color")
                buyerInfo.ids.push(seatId);
                ticketOrder.seatNumbers.push(number);
            }
            else {
                setSeatClass("seat available-color")
                buyerInfo.ids = buyerInfo.ids.filter(id => id !== seatId);
                ticketOrder.seatNumbers = ticketOrder.seatNumbers.filter(seatNumber => seatNumber !== number);
            };
        }
        else {
            alert("Esse assento não está disponível");
        }
        
    }

    return (
        <div className={seatClass} onClick={selectSeat}>
            {number.padStart(2, "0")}
        </div>
    );
}
