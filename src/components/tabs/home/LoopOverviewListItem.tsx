import React from "react";


type LoopOverviewListItemProps = {
    loopItem: LoopItem
}

export default class LoopOverviewListItem extends React.Component<LoopOverviewListItemProps> {
    render() {
        return <li className="loop-list-item-1">
            {this.props.loopItem.icon}
            <h1>{this.props.loopItem.primaryText}</h1>
            <h2>{this.props.loopItem.secondaryText}</h2>
            <p>{this.props.loopItem.minutes}m</p>
        </li>
    }
}