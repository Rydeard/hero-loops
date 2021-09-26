import React from "react";
import Icons from "../../../utils/Icons";

type LoopPlannerGridProps = {
    loopItems: Array<LoopItem>
}

export default class LoopPlannerGrid extends React.Component<LoopPlannerGridProps> {
    render() {
        let loopListItems: Array<JSX.Element> = [];
        this.props.loopItems.forEach((loopItem, index) => {
            loopListItems.push(
                <LoopOverviewGridItem position={index % 2} key={index}
                    loopItem={loopItem}>
                </LoopOverviewGridItem>
            )
        })
        return <ol id="loop-planner-list">
            {loopListItems}
        </ol>
    }
}

type LoopOverviewGridItemProps = {
    loopItem: LoopItem
    position: number
}

export class LoopOverviewGridItem extends React.Component<LoopOverviewGridItemProps>{
    render() {
        let bgColorStyle = this.props.position == 0 ? "loop-planner-grid-item-1" : "loop-planner-grid-item-2"

        return <div className={bgColorStyle + " loop-planner-grid"}>
            <div className="planner2">
                {this.props.loopItem.icon}
                <h1 >{this.props.loopItem.primaryText}</h1>
                <h2 >{this.props.loopItem.secondaryText}</h2>
            </div>
            <p className="planner3">{this.props.loopItem.minutes}m</p>
            <p className="planner4">{this.props.loopItem.repeats}x</p>
            <div className="planner5">{Icons.plus}{Icons.minus}{Icons.chevron_up}{Icons.chevron_down}{Icons.duplicate}{Icons.x}</div>
        </div>
    }
}