import "./reservation.css";
import Bottom from "../bottom/Bottom";
import Seat from "./Seat";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Reservation() {

    const [seats, setSeats] = useState([]);
    const [movieInfo, setMovieInfo] = useState({title: "", posterURL: "", weekday: "", time: "", date: "", seatNumbers: []});
    const {idSessao} = useParams();
    const [buyerInfo, setBuyerInfo] = useState({ids: [], name: "", cpf: ""});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`).then(
            res => {
                setSeats(res.data.seats);
                setMovieInfo({title: res.data.movie.title, posterURL: res.data.movie.posterURL, weekday: res.data.day.weekday, time: res.data.name, date: res.data.day.date, seatNumbers: []});
            }
        )
    }, []);

    function getInput(e) {
        if(e.target.className === "name-input") setBuyerInfo({...buyerInfo, name: e.target.value})
        else setBuyerInfo({...buyerInfo, cpf: e.target.value})
    }

    function sendInformation() {
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", buyerInfo);
    }

    return (
        <div className="reservation-page">
            <div className="reservation">
                <div className="page-title">Selecione o(s) assento(s)</div>
                <div className="seats">
                    {seats.map((seat) => (
                        <Seat key={seat.id} number={seat.name} isAvailable={seat.isAvailable} seatId={seat.id} buyerInfo={buyerInfo} movieInfo={movieInfo}/>
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
                        <input className="name-input" type="text" placeholder="Digite seu nome..." onChange={(e) => getInput(e)} value={buyerInfo.name}/>
                    </div>
                    <div className="cpf">
                        <span>CPF do comprador: </span>
                        <input className="cpf-input" type="text" placeholder="Digite seu CPF..." onChange={(e) => getInput(e)} value={buyerInfo.cpf}/>
                    </div>
                </div>
                <Link to={{pathname: "/sucesso", state: {
                    movieTitle: movieInfo.title,
                    date: movieInfo.date,
                    time: movieInfo.time,
                    seatNumbers: movieInfo.seatNumbers,
                    name: buyerInfo.name,
                    cpf: buyerInfo.cpf
                }}}><button className="reserve-seat" onClick={sendInformation}>Reservar assento(s)</button></Link>
            </div>
            <Bottom title={movieInfo.title} img={movieInfo.posterURL} session={`${movieInfo.weekday} - ${movieInfo.time}`}/>
        </div>
    );
}

