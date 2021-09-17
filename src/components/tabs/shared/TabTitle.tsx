import React from "react";
import './TabTitle.css';

type TabTitleProps = {
    leftString: String
    rightString?: String
}

export default class TabTitle extends React.Component<TabTitleProps> {
    render() {
        return <div className="tab-title">
            <h1>{this.props.leftString}</h1>
            <p>{this.props.rightString ?? ""}</p>
        </div>
    }
}