import React from "react";
import Icons from "../../../utils/Icons";


export default class MainActions extends React.Component {
    render() {
        return <div id="main-actions-container">
            <ol className="main-actions-grid">
                <li className="main-action">{Icons.hiking_category}<h1>Explore</h1><p>35 actions</p></li>
                <li className="main-action">{Icons.castle_category}<h1>Hythe</h1><p>35 actions</p></li>
            </ol>
        </div>
    }
}