export default function Inputs({
    seatNumber,
    buyerInfo,
    setBuyerInfo,
    nameInputClass,
    cpfInputClass,
    ticketOrder,
    setTicketOrder,
}) {
    function getInput(e) {
        if (e.target.classList.contains("name-input")) {
            setBuyerInfo({ ...buyerInfo, name: e.target.value });
            setTicketOrder({ ...ticketOrder, name: e.target.value });
        }
        if (e.target.classList.contains("cpf-input")) {
            setBuyerInfo({ ...buyerInfo, cpf: formatCPF(e.target.value) });
            setTicketOrder({ ...ticketOrder, cpf: formatCPF(e.target.value) });
        }
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
            <p className="seat-information">Assento {seatNumber}</p>
            <div className="name">
                <span className="name-span">Nome do comprador: </span>
                <input
                    className={nameInputClass[0]}
                    type="text"
                    placeholder="Digite seu nome..."
                    onChange={(e) => getInput(e)}
                    value={buyerInfo.name}
                />
                <span className={nameInputClass[1]}>Digite um nome válido</span>
            </div>
            <div className="cpf">
                <span className="cpf-span">CPF do comprador: </span>
                <input
                    className={cpfInputClass[0]}
                    type="text"
                    placeholder="Digite seu CPF..."
                    onChange={(e) => getInput(e)}
                    value={buyerInfo.cpf}
                />
                <span className={cpfInputClass[1]}>
                    Digite o CPF no formato XXX.XXX.XXX-XX
                </span>
            </div>
        </div>
    );
}
