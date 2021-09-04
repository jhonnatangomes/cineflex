import "./home.css";
import Movie from "./Movie";
import axios from "axios";
import {useState, useEffect} from "react";


export default function Home({ticketOrder, setTicketOrder}) {

    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies").then(
                res => {
                    setMovies(res.data);
                }
            )
        }, []
    );
    
    return (
        <div className="home">
            <div className="page-title">Selecione o filme</div>
            <div className="movies">
                {movies.map(movie => <Movie img={movie.posterURL} key={movie.id} id={movie.id} ticketOrder={ticketOrder} setTicketOrder={setTicketOrder} title={movie.title}/>)}
            </div>
        </div>
    );
}