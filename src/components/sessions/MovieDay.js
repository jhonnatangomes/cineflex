import { Link } from "react-router-dom";

export default function MovieDay({ weekday, date, showtimes }) {
    return (
        <div className="movie-day">
            <div className="day">
                {weekday} - {date}
            </div>
            <div className="times">
                {showtimes.map((showtime) => (
                    <Time time={showtime.name} key={showtime.id} id={showtime.id}/>
                ))}
            </div>
        </div>
    );
}

function Time({ time, id }) {
    return (
        <Link to={`/assentos/${id}`} className="link">
            <div className="time">{time}</div>
        </Link>
    );
}
