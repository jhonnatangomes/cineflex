import styled from "styled-components";

export default function Inputs({
    buyerInfo,
    setBuyerInfo,
    i,
    ticketOrder,
    setTicketOrder
}) {

    function getInput(e) {
        const newBuyerInfo = {...buyerInfo};
        const newTicketOrder = {...ticketOrder};
        if (e.target.classList.contains("name-input")) {
            newBuyerInfo.compradores[i].nome = e.target.value;
            newTicketOrder.buyers[i].name = e.target.value;
        }
        if (e.target.classList.contains("cpf-input")) {
            newBuyerInfo.compradores[i].cpf = formatCPF(e.target.value);
            newTicketOrder.buyers[i].cpf = formatCPF(e.target.value);
        }
        setBuyerInfo({...newBuyerInfo});
        setTicketOrder({...newTicketOrder});
    }

    function formatCPF(cpf) {
        let formattedCPF = cpf;
        const lastChar = cpf[cpf.length - 1];
        if (cpf.length === 4 && cpf[3] !== ".") {
            formattedCPF = cpf.slice(0, 3) + "." + cpf[3];
        }
        if (cpf.length === 8 && cpf[7] !== ".") {
            formattedCPF = cpf.slice(0, 7) + "." + cpf[7];
        }
        if (cpf.length === 12 && cpf[11] !== "-") {
            formattedCPF = cpf.slice(0, 11) + "-" + cpf[11];
        }
        if (lastChar !== "." && lastChar !== "-" && isNaN(Number(lastChar))) {
            formattedCPF = cpf.slice(0, cpf.length - 1);
        }
        if (cpf.length > 14) {
            formattedCPF = cpf.slice(0, cpf.length - 1);
        }
        return formattedCPF;
    }

    return (
        <div className="information">
            <div className="seat-information">Assento {ticketOrder.buyers[i].seatNumber}</div>
            <div className="name">
                <span className="name-span">Nome do comprador: </span>
                <Input
                    type="text"
                    placeholder="Digite seu nome..."
                    className="name-input"
                    onChange={(e) => getInput(e)}
                    value={ticketOrder.buyers[i].name}
                    border={ticketOrder.buyers[i].nameColor}
                />
                <ErrorSpan border={ticketOrder.buyers[i].nameColor}>Digite um nome válido</ErrorSpan>
            </div>
            <div className="cpf">
                <span className="cpf-span">CPF do comprador: </span>
                <Input
                    type="text"
                    placeholder="Digite seu CPF..."
                    className="cpf-input"
                    onChange={(e) => getInput(e)}
                    value={ticketOrder.buyers[i].cpf}
                    border={ticketOrder.buyers[i].cpfColor}
                />
                <ErrorSpan border={ticketOrder.buyers[i].cpfColor}>Digite o CPF no formato XXX.XXX.XXX-XX</ErrorSpan>
            </div>
        </div>
    );
}

const Input = styled.input`
    width: 100%;
    height: 51px;
    border: 1px solid ${(props) => (props.border === "red" ? "red" : "#d5d5d5")};
    border-radius: 3px;
    padding-left: 18px;
    outline: none;

    &::placeholder {
        font-style: italic;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        color: #afafaf;
    }
`;

const ErrorSpan = styled.span`
    color: red;
    font-size: 17px;
    display: ${ ({border}) => border === "red" ? "block" : "none" };
`;

