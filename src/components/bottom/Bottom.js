import "./bottom.css";

export default function Bottom({img, title, session}) {
    return (
        <div className="bottom">
            <div className="movie-bottom">
                <img src={img} alt="" />
            </div>
            <div className="movie-information">
                <span>{title}</span>
                <span>{session}</span>
            </div>
        </div>
    );
}
