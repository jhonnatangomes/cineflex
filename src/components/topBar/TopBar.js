import "./topBar.css";
import { useLocation, useHistory } from "react-router";

export default function TopBar (){

    const location = useLocation();
    const history = useHistory();

    return (
        <div className="top-bar">
            {location.pathname === "/cineflex" || location.pathname === "/" ? "" : <ion-icon name="caret-back-circle-outline" onClick={history.goBack}></ion-icon>}
            <div className="app-title">CINEFLEX</div>
        </div>
    );
}