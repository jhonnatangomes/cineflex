import { useState } from "react";

export default function Seat({ number, isAvailable }) {

    const [seatClass, setSeatClass] = useState(isAvailable ? "seat available-color" : "seat unavailable-color");

    function selectSeat() {
        if(isAvailable){
            setSeatClass("seat selected-color");
        }
        
    }

    return (
        <div className={seatClass} onClick={selectSeat}>
            {number.padStart(2, "0")}
        </div>
    );
}
