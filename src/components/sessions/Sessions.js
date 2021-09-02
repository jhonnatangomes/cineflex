import MovieDay from "./MovieDay";
import Bottom from "./Bottom";
import "./sessions.css";

const showTimes = [
    {
        day: "Quinta-feira - 24/06/2021",
        sessions: ["15:00", "19:00"]
    },
    {
        day: "Sexta-feira - 25/06/2021",
        sessions: ["15:00", "19:00"]
    }
]

export default function Sessions() {
    return (
        <div className="sessions">
            <div className="page-title">Selecione o horário</div>
            {showTimes.map((showTime, i) => <MovieDay day={showTime.day} sessions={showTime.sessions} key={i}/>)}
            <Bottom />
        </div>
    );
}