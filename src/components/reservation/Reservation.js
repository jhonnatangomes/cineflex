import "./reservation.css";
import Bottom from "../bottom/Bottom";
import Seat from "./Seat";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";

export default function Reservation({ ticketOrder, setTicketOrder }) {
    const [movieInfo, setMovieInfo] = useState({
        movie: { title: "", posterURL: "" },
        day: { weekday: "," },
        seats: [],
        name: "",
    });
    const { idSessao } = useParams();
    const [buyerInfo, setBuyerInfo] = useState({ ids: [], compradores: [] });
    const [borderColor, setBorderColor] = useState([]);

    console.log(buyerInfo);

    useEffect(() => {
        axios
            .get(
                `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`
            )
            .then((res) => {
                setMovieInfo(res.data);
            });
    }, [idSessao]);

    function sendInformation(e) {
        // console.log("name: ");
        // console.log(isInvalidName());
        // console.log("cpf: ");
        // console.log(isInvalidCPF())
        if (
            isInvalidName().length !== 0 ||
            isInvalidCPF().length !== 0 ||
            !isThereASelectedSeat()
        ) {
            e.preventDefault();
        } else {
            // axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", buyerInfo);
            console.log(buyerInfo);
        }
        if (!isThereASelectedSeat()) {
            alert("Selecione pelo menos um assento");
        }
    }

    function isInvalidName() {
        let invalidNames = [];
        buyerInfo.compradores.forEach((comprador) => {
            if (comprador.nome === "") {
                invalidNames.push({ id: comprador.idAssento });
            }
        });
        
        return invalidNames;
    }

    function isInvalidCPF() {
        let invalidCpfs = [];
        buyerInfo.compradores.forEach((comprador) => {
            if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(comprador.cpf)) {
                invalidCpfs.push({ id: comprador.idAssento });
            }
        });
        console.log(invalidCpfs);
        return invalidCpfs;
    }

    function isThereASelectedSeat() {
        return buyerInfo.ids.length;
    }

    return (
        <div className="reservation-page">
            <div className="reservation">
                <div className="page-title">Selecione o(s) assento(s)</div>
                <div className="seats">
                    {movieInfo.seats.map((seat) => (
                        <Seat
                            key={seat.id}
                            number={seat.name}
                            isAvailable={seat.isAvailable}
                            seatId={seat.id}
                            buyerInfo={buyerInfo}
                            ticketOrder={ticketOrder}
                            setTicketOrder={setTicketOrder}
                            borderColor={borderColor}
                            setBorderColor={setBorderColor}
                        />
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
                {ticketOrder.seatNumbers.map((seatNumber, i) => (
                    <Inputs
                        buyerInfo={buyerInfo}
                        setBuyerInfo={setBuyerInfo}
                        borderColor={borderColor.find(
                            (input) => input.seatNumber === seatNumber
                        )}
                        key={i}
                        index={i}
                    />
                ))}
                <Link to="/sucesso">
                    <button className="reserve-seat" onClick={sendInformation}>
                        Reservar assento(s)
                    </button>
                </Link>
            </div>
            <Bottom
                title={movieInfo.movie.title}
                img={movieInfo.movie.posterURL}
                session={`${movieInfo.day.weekday} - ${movieInfo.name}`}
            />
        </div>
    );
}
