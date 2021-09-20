import React from "react";
import Icons from "../../../utils/Icons";


export default class MainActions extends React.Component {
    render() {
        return <div id="main-actions-container">
            <ul className="main-actions-grid">
                <li className="main-action">{Icons.hiking}<h1>Explore</h1><p>35 actions</p></li>
                <li className="main-action">{Icons.castle}<h1>Hythe</h1><p>35 actions</p></li>
            </ul>
        </div>
    }
}