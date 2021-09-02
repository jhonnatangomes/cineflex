import "./reservation.css";
import Bottom from "../bottom/Bottom";

const seats = [];

for (let i = 1; i <= 50; i++) {
    seats.push({ name: String(i).padStart(2, "0"), id: i, isAvailable: i % 2 === 0 ? true : false});
}

export default function Reservation() {
    return (
        <div className="reservation-page">
            <div className="reservation">
                <div className="page-title">Selecione o(s) assento(s)</div>
                <div className="seats">
                    {seats.map((seat, i) => (
                        <Seat key={i} number={seat.name} isAvailable={seat.isAvailable}/>
                    ))}
                </div>
                <div className="seats-subtitle">
                    <div className="selected">
                        <div className="selected-color color"></div>
                        Selecionado
                    </div>
                    <div className="available">
                        <div className="available-color color"></div>
                        Disponível
                    </div>
                    <div className="unavailable">
                        <div className="unavailable-color color"></div>
                        Indisponível
                    </div>
                </div>
                <div className="information">
                    <div className="name">
                        <span>Nome do comprador: </span>
                        <input placeholder="Digite seu nome..." />
                    </div>
                    <div className="cpf">
                        <span>CPF do comprador: </span>
                        <input placeholder="Digite seu CPF..." />
                    </div>
                </div>
                <button className="reserve-seat">Reservar assento(s)</button>
            </div>
            <Bottom title={"hahaha"} />
        </div>
    );
}

function Seat({ number, isAvailable }) {
    return <div className={isAvailable ? "seat selected-color" : "seat unavailable-color"}>{number}</div>;
}
