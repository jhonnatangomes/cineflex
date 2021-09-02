import "./success.css";

export default function Success () {
    return (
        <div className="success">
            <div className="page-title">Pedido feito <br/> com sucesso!</div>
            <div className="movie-and-session">
                <p>Filme e sessão</p>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div className="tickets">
                <p>Ingressos</p>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div className="buyer">
                <p>Comprador</p>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button className="return-to-home">Voltar para Home</button>
        </div>
    );
}