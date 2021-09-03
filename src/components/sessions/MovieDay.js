import { Link } from "react-router-dom";

export default function MovieDay({ weekday, date, showtimes, ticketOrder, setTicketOrder }) {
    return (
        <div className="movie-day">
            <div className="day">
                {weekday} - {date}
            </div>
            <div className="times">
                {showtimes.map((showtime) => (
                    <Time time={showtime.name} key={showtime.id} id={showtime.id} date={date} ticketOrder={ticketOrder} setTicketOrder={setTicketOrder}/>
                ))}
            </div>
        </div>
    );
}

function Time({ time, id, date, ticketOrder, setTicketOrder }) {
    return (
        <Link to={`/assentos/${id}`} className="link">
            <div className="time" onClick={() => setTicketOrder({...ticketOrder, date: date, time: time})}>{time}</div>
        </Link>
    );
}
