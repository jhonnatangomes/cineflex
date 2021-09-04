import { useState } from "react";

export default function Seat({
    number,
    isAvailable,
    seatId,
    buyerInfo,
    ticketOrder,
    setTicketOrder,
    borderColor,
    setBorderColor,
}) {
    const [seatClass, setSeatClass] = useState(
        isAvailable ? "seat available-color" : "seat unavailable-color"
    );

    function selectSeat() {
        if (isAvailable) {
            if (seatClass === "seat available-color") {
                setSeatClass("seat selected-color");
                buyerInfo.ids.push(seatId);
                buyerInfo.compradores.push({
                    idAssento: seatId,
                    nome: "",
                    cpf: "",
                });
                ticketOrder.buyers.push({
                    seatNumber: number,
                    name: "",
                    cpf: "",
                });
                borderColor.push({
                    seatId: seatId,
                    seatNumber: number,
                    nameColor: "",
                    cpfColor: "",
                });
            } else {
                const deleteSeat = window.confirm(
                    "Você realmente quer desmarcar esse assento?"
                );
                if (deleteSeat) {
                    setSeatClass("seat available-color");
                    buyerInfo.ids = buyerInfo.ids.filter((id) => id !== seatId);
                    buyerInfo.compradores = buyerInfo.compradores.filter(
                        (comprador) => comprador.idAssento !== seatId
                    );
                    ticketOrder.buyers = ticketOrder.buyers.filter(
                        (buyer) => buyer.seatNumber !== number
                    );
                    borderColor = borderColor.filter(
                        (input) => input.seatNumber !== number
                    );
                }
            }
            setTicketOrder({ ...ticketOrder });
            setBorderColor([...borderColor]);
        } else {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <div className={seatClass} onClick={selectSeat}>
            {number.padStart(2, "0")}
        </div>
    );
}
