import {Link} from "react-router-dom";

export default function Movie({img, id, title, ticketOrder, setTicketOrder}) {
    return (
        <Link to={`/sessoes/${id}`}>
        <div className="movie" onClick={() => setTicketOrder({...ticketOrder, title: title})}>
            <img src={img} alt=""/>
        </div>
        </Link>
    );
}