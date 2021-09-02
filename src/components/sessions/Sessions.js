import MovieDay from "./MovieDay";
import Bottom from "../bottom/Bottom";
import "./sessions.css";

const showTimes = [
    {
        day: "Quinta-feira - 24/06/2021",
        sessions: ["15:00", "19:00"],
    },
    {
        day: "Sexta-feira - 25/06/2021",
        sessions: ["15:00", "19:00"],
    },
];

export default function Sessions() {
    return (
        <div className="sessions-page">
            <div className="sessions">
                <div className="page-title">Selecione o horário</div>
                {showTimes.map((showTime, i) => (
                    <MovieDay
                        day={showTime.day}
                        sessions={showTime.sessions}
                        key={i}
                    />
                ))}
            </div>
            <Bottom title={"Enola Holmes"} session={"bla bla la"} />
        </div>
    );
}
