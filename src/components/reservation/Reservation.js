import "./reservation.css";

const seats = [];

for (let i = 1; i <= 50; i++) {
    seats.push({ number: String(i).padStart(2, "0") });
}

export default function Reservation() {
    return (
        <div className="reservation">
            <div className="page-title">Selecione o(s) assento(s)</div>
            <div className="seats">
                {seats.map((seat, i) => (
                    <Seat key={i} number={seat.number} />
                ))}
            </div>
            <div className="seats-subtitle">
                <div className="selected">
                    <div className="color"></div>
                    Selecionado
                </div>
                <div className="available">
                    <div className="color"></div>
                    Disponível
                </div>
                <div className="unavailable">
                    <div className="color"></div>
                    Indisponível
                </div>
            </div>
            <div className="information">
                <div className="name">
                    <span>Nome do comprador: </span>
                    <input placeholder="Digite seu nome..."/>
                </div>
                <div className="cpf">
                    <span>CPF do comprador: </span>
                    <input placeholder="Digite seu CPF..."/>
                </div>
            </div>
            <button className="reserve-seat">Reservar assento(s)</button>
        </div>
    );
}

function Seat({ number }) {
    return <div className="seat">{number}</div>;
}
