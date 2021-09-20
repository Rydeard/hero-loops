import React from "react";
import Icons from "../../../utils/Icons";
import './TabHeader.css';

type TabHeaderProps = {
    tabHeaders: Array<React.ReactElement>
}

export default class TabHeader extends React.Component<TabHeaderProps> {
    render() {
        return <div className="tab-header">
            {this.props.tabHeaders}
        </div>
    }
}