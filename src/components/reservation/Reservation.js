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

    let invalidNames, invalidCpfs;
    console.log(buyerInfo);

    useEffect(() => {
        axios
            .get(
                `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`
            )
            .then((res) => {
                setMovieInfo(res.data);
                setTicketOrder({...ticketOrder, title: res.data.movie.title, date: res.data.day.date, time: res.data.name});
            });
    }, [idSessao]);

    function sendInformation(e) {
        AreThereInvalidNames();
        AreThereInvalidCPFs();
        if (
            invalidNames ||
            invalidCpfs ||
            !isThereASelectedSeat()
        ) {
            e.preventDefault();
        } else {
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", buyerInfo);
        }
        if (!isThereASelectedSeat()) {
            alert("Selecione pelo menos um assento");
        }
    }

    function AreThereInvalidNames() {
        invalidNames = false;
        ticketOrder.buyers.forEach((buyer) => {
            if (buyer.name === "") {
                buyer.nameColor = "red";
                invalidNames = true;
            } else {
                buyer.nameColor = "";
            }
        });
        setTicketOrder({...ticketOrder});
    }

    function AreThereInvalidCPFs() {
        invalidCpfs = false;
        ticketOrder.buyers.forEach((buyer) => {
            if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(buyer.cpf)) {
                buyer.cpfColor = "red";
                invalidCpfs = true;
            } else {
                buyer.cpfColor = "";
            }
        });
        setTicketOrder({...ticketOrder});
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
                            setBuyerInfo={setBuyerInfo}
                            ticketOrder={ticketOrder}
                            setTicketOrder={setTicketOrder}
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
                {ticketOrder.buyers.map((buyer, i) => (
                    <Inputs
                        buyerInfo={buyerInfo}
                        setBuyerInfo={setBuyerInfo}
                        ticketOrder={ticketOrder}
                        setTicketOrder={setTicketOrder}
                        key={i}
                        i={i}
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
