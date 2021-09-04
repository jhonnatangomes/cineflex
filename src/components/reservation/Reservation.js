import "./reservation.css";
import Bottom from "../bottom/Bottom";
import Seat from "./Seat";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Reservation({ticketOrder, setTicketOrder}) {

    const [movieInfo, setMovieInfo] = useState({movie: {title: "", posterURL: ""}, day: {weekday: ","},seats: [], name: ""});
    const {idSessao} = useParams();
    const [buyerInfo, setBuyerInfo] = useState({ids: [], name: "", cpf: ""});
    const [nameInputClass, setNameInputClass] = useState(["name-input", "error-message hidden"]);
    const [cpfInputClass, setCpfInputClass] = useState(["cpf-input", "error-message hidden"]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`).then(
            res => {
                setMovieInfo(res.data);
            }
        )
    }, [idSessao]);

    function getInput(e) {
        if(e.target.classList.contains("name-input") ) {
            setBuyerInfo({...buyerInfo, name: e.target.value});
            setTicketOrder({...ticketOrder, name: e.target.value});
        }
        if(e.target.classList.contains("cpf-input")) {
            setBuyerInfo({...buyerInfo, cpf: e.target.value});
            setTicketOrder({...ticketOrder, cpf: e.target.value});
        }
    }

    function sendInformation(e) {
        if(!isValidCPF() || !isValidName() || !isThereASelectedSeat()){
            e.preventDefault();
        }
        else{
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", buyerInfo);
        }
        if(!isValidName()){
            setNameInputClass(["name-input wrong", "error-message"]);
        }
        if(!isValidCPF()){
            setCpfInputClass(["cpf-input wrong", "error-message"]);
        }
        if(!isThereASelectedSeat()){
            alert("Selecione pelo menos um assento");
        }
    }

    function isValidName() {
        if(buyerInfo.name === "") return false;
        else return true;
    }

    function isValidCPF() {
        return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(buyerInfo.cpf);
    }

    function isThereASelectedSeat () {
        return buyerInfo.ids.length;
    }

    return (
        <div className="reservation-page">
            <div className="reservation">
                <div className="page-title">Selecione o(s) assento(s)</div>
                <div className="seats">
                    {movieInfo.seats.map((seat) => (
                        <Seat key={seat.id} number={seat.name} isAvailable={seat.isAvailable} seatId={seat.id} buyerInfo={buyerInfo} ticketOrder={ticketOrder}/>
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
                        <span className="name-span">Nome do comprador: </span>
                        <input className={nameInputClass[0]} type="text" placeholder="Digite seu nome..." onChange={(e) => getInput(e)} value={buyerInfo.name}/>
                        <span className={nameInputClass[1]}>Digite um nome válido</span>
                    </div>
                    <div className="cpf">
                        <span className="cpf-span">CPF do comprador: </span>
                        <input className={cpfInputClass[0]} type="text" placeholder="Digite seu CPF..." onChange={(e) => getInput(e)} value={buyerInfo.cpf}/>
                        <span className={cpfInputClass[1]}>Digite o CPF no formato XXX.XXX.XXX-XX</span>
                    </div>
                </div>
                <Link to="/sucesso"><button className="reserve-seat" onClick={sendInformation}>Reservar assento(s)</button></Link>
            </div>
            <Bottom title={movieInfo.movie.title} img={movieInfo.movie.posterURL} session={`${movieInfo.day.weekday} - ${movieInfo.name}`}/>
        </div>
    );
}

