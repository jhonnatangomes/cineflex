import MovieDay from "./MovieDay";
import Bottom from "../bottom/Bottom";
import "./sessions.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Sessions({ticketOrder, setTicketOrder}) {
    const [movieInfo, setMovieInfo] = useState({days: []});
    const { idFilme } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`
            )
            .then((res) => {
                setMovieInfo(res.data);
                setTicketOrder({...ticketOrder, title: res.data.title});
            });
    }, [idFilme]);

    return (
        <div className="sessions-page">
            <div className="sessions">
                <div className="page-title">Selecione o horário</div>
                {movieInfo.days.map((session) => (
                    <MovieDay
                        weekday={session.weekday}
                        date={session.date}
                        showtimes={session.showtimes}
                        key={session.id}
                    />
                ))}
            </div>
            <Bottom title={movieInfo.title} img={movieInfo.posterURL} />
        </div>
    );
}
