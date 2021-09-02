import MovieDay from "./MovieDay";
import Bottom from "../bottom/Bottom";
import "./sessions.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Sessions() {
    const [sessions, setSessions] = useState([]);
    const [movieInfo, setMovieInfo] = useState({});
    const { idFilme } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`
            )
            .then((res) => {
                setSessions(res.data.days);
                setMovieInfo(res.data);
            });
    }, []);

    return (
        <div className="sessions-page">
            <div className="sessions">
                <div className="page-title">Selecione o horário</div>
                {sessions.map((session) => (
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
