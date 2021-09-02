import "../css/reset.css";
import "../css/style.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Sessions from "./sessions/Sessions";
import Reservation from "./reservation/Reservation";
import Success from "./success/Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <Sessions />
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    <Reservation />
                </Route>
                <Route path="/sucesso" exact>
                    <Success />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
