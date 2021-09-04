import "../css/reset.css";
import "../css/style.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Sessions from "./sessions/Sessions";
import Reservation from "./reservation/Reservation";
import Success from "./success/Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [ticketOrder, setTicketOrder] = useState({
        title: "",
        date: "",
        time: "",
        seatNumbers: [],
        name: "",
        cpf: "",
    });

    return (
        <Router>
            <TopBar ticketOrder={ticketOrder} />
            <Switch>
                <Route path="/sessoes/:idFilme" exact>
                    <Sessions
                        ticketOrder={ticketOrder}
                        setTicketOrder={setTicketOrder}
                    />
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    <Reservation
                        ticketOrder={ticketOrder}
                        setTicketOrder={setTicketOrder}
                    />
                </Route>
                <Route path="/sucesso" exact>
                    <Success
                        ticketOrder={ticketOrder}
                        setTicketOrder={setTicketOrder}
                    />
                </Route>
                <Route path="/">
                    <Home
                        ticketOrder={ticketOrder}
                        setTicketOrder={setTicketOrder}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
