import { Link } from "react-router-dom";

export default function Movie({ img, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <div className="movie">
                <img src={img} alt="" />
            </div>
        </Link>
    );
}
