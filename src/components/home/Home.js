import "./home.css";
import twentysixtyseven from "../../assets/img.png";
import enolaholmes from "../../assets/img2.png";
import Movie from "./Movie";

const movies = [
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    },
    {
        movie: "2067",
        img: twentysixtyseven
    },
    {
        movie: "Enola Holmes",
        img: enolaholmes
    }
]

export default function Home() {
    return (
        <div className="home">
            <div className="page-title">Selecione o filme</div>
            <div className="movies">
                {movies.map((movie, i) => <Movie img={movie.img} key={i}/>)}
            </div>
        </div>
        
    );
}