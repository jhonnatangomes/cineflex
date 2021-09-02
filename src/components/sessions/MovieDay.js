export default function MovieDay({day, sessions}) {
    return (
        <div className="movie-day">
            <div className="day">{day}</div>
            <div className="times">
                {sessions.map((session, i) => <Time time={session} key={i} />)}
            </div>
        </div>
    );
}

function Time({time}){
    return (
        <div className="time">{time}</div>
    );
}