export default function MovieDay({weekday, date, showtimes}) {
    return (
        <div className="movie-day">
            <div className="day">{weekday} - {date}</div>
            <div className="times">
                {showtimes.map(showtime => <Time time={showtime.name} key={showtime.id} />)}
            </div>
        </div>
    );
}

function Time({time}){
    return (
        <div className="time">{time}</div>
    );
}