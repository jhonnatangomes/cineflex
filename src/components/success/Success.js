import "./success.css";
import { Link } from "react-router-dom";

export default function Success({ ticketOrder, setTicketOrder }) {
    const { title, date, time, buyers } = ticketOrder;

    function clearOrder() {
        setTicketOrder({
            title: "",
            date: "",
            time: "",
            buyers: [],
        });
    }

    return (
        <div className="success">
            <div className="page-title">
                Pedido feito <br /> com sucesso!
            </div>
            <div className="movie-and-session">
                <p>Filme e sessão</p>
                <p>{title}</p>
                <p>
                    {date} {time}
                </p>
            </div>
            <div className="tickets">
                <p>Ingressos</p>
                {buyers.map((buyer, i) => (
                    <p key={i}>Assento {buyer.seatNumber}</p>
                ))}
            </div>
            {buyers.map((buyer, i) => (
                <div className="buyer" key={i}>
                    <p>Comprador do assento {buyer.seatNumber}</p>
                    <p>Nome: {buyer.name}</p>
                    <p>CPF: {buyer.cpf}</p>
                </div>
            ))}
            <Link to="/">
                <button className="return-to-home" onClick={clearOrder}>
                    Voltar para Home
                </button>
            </Link>
        </div>
    );
}
