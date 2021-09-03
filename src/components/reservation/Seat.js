import { useState } from "react";

export default function Seat({ number, isAvailable }) {

    const [seatClass, setSeatClass] = useState(isAvailable ? "seat available-color" : "seat unavailable-color");

    function selectSeat() {
        if(isAvailable){
            if(seatClass === "seat available-color") setSeatClass("seat selected-color");
            else setSeatClass("seat available-color");
        }
        
    }

    return (
        <div className={seatClass} onClick={selectSeat}>
            {number.padStart(2, "0")}
        </div>
    );
}
