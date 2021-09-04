import "./topBar.css";
import { useLocation, useHistory } from "react-router";

export default function TopBar({ ticketOrder }) {
    const location = useLocation();
    const history = useHistory();

    function goBack() {
        ticketOrder.buyers = [];
        history.goBack();
    }

    return (
        <div className="top-bar">
            {location.pathname === "/cineflex" || location.pathname === "/" ? (
                ""
            ) : (
                <ion-icon
                    name="caret-back-circle-outline"
                    onClick={goBack}
                ></ion-icon>
            )}
            <div className="app-title">CINEFLEX</div>
        </div>
    );
}
