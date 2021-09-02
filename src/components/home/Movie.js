import {Link} from "react-router-dom";

export default function Movie({img, id}) {
    return (
        <div className="movie">
            <Link to={`/sessoes/${id}`}><img src={img} alt=""/></Link>
        </div>
    );
}