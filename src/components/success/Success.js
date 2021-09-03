import "./success.css";
import {Link} from "react-router-dom";

export default function Success ({ticketOrder, setTicketOrder}) {

    const {title, date, time, seatNumbers, name, cpf} = ticketOrder;

    function clearOrder() {
        setTicketOrder({
            title: "",
            date: "",
            time: "",
            seatNumbers: [],
            name: "",
            cpf: ""
        })
    };

    return (
        <div className="success">
            <div className="page-title">Pedido feito <br/> com sucesso!</div>
            <div className="movie-and-session">
                <p>Filme e sessão</p>
                <p>{title}</p>
                <p>{date} {time}</p>
            </div>
            <div className="tickets">
                <p>Ingressos</p>
                {seatNumbers.map((seatNumber, i) => <p key={i}>Assento {seatNumber}</p>)}
            </div>
            <div className="buyer">
                <p>Comprador</p>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <Link to="/"><button className="return-to-home" onClick={clearOrder}>Voltar para Home</button></Link>
        </div>
    );
}

