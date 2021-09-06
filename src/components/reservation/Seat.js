import { useState } from "react";

export default function Seat({
    number,
    isAvailable,
    seatId,
    buyerInfo,
    setBuyerInfo,
    ticketOrder,
    setTicketOrder
}) {
    const [seatClass, setSeatClass] = useState(
        isAvailable ? "seat available-color" : "seat unavailable-color"
    );

    function selectSeat() {
        if (isAvailable) {
            const newBuyerInfo = {...buyerInfo};
            const newTicketOrder = {...ticketOrder};
            if (seatClass === "seat available-color") {
                setSeatClass("seat selected-color");
                newBuyerInfo.ids.push(seatId);
                newBuyerInfo.compradores.push({
                    idAssento: seatId,
                    nome: "",
                    cpf: "",
                });
                newTicketOrder.buyers.push({
                    seatNumber: number,
                    name: "",
                    cpf: "",
                    nameColor: "",
                    cpfColor: ""
                });
            } else {
                const deleteSeat = window.confirm(
                    "Você realmente quer desmarcar esse assento? Os dados serão apagados"
                );
                if (deleteSeat) {
                    setSeatClass("seat available-color");
                    newBuyerInfo.ids = buyerInfo.ids.filter((id) => id !== seatId);
                    newBuyerInfo.compradores = buyerInfo.compradores.filter(
                        (comprador) => comprador.idAssento !== seatId
                    );
                    newTicketOrder.buyers = ticketOrder.buyers.filter(
                        (buyer) => buyer.seatNumber !== number
                    );
                }
            }
            setBuyerInfo({...newBuyerInfo});
            setTicketOrder({ ...newTicketOrder });
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
