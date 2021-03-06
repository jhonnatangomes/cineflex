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
        buyers: []
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
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
