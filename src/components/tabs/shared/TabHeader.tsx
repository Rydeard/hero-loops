import React from "react";
import Icons from "../../../utils/Icons";
import './TabHeader.css';

type TabHeaderProps = {
    leftString: String
    rightString: String
}

export default class TabHeader extends React.Component<TabHeaderProps> {
    render() {
        return <div className="tab-header">
            <h2>Exploring...</h2>
            <p>{Icons.clock}</p>
        </div>
    }
}