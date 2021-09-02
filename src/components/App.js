import "../css/reset.css";
import "../css/style.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Sessions from "./sessions/Sessions";
import Reservation from "./reservation/Reservation";

function App() {
    return (
        <>
            <TopBar />
            {/* <Home /> */}
            <Sessions />
            {/* <Reservation /> */}
        </>
    );
}

export default App;
