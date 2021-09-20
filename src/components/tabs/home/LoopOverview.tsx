import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import LoopOverviewList from "./LoopOverviewList";
import './LoopOverview.css'
import Icons from "../../../utils/Icons";


type LoopOverviewProps = {
}

export default class LoopOverview extends React.Component<LoopOverviewProps> {
    render() {
        let tabHeaders = [<h2>Exploring...</h2>, <div style={{marginRight: 6}}>{Icons.clock}</div>]

        let x = <div></div>
        // set x style to background-color:red

        return <div>
            <TabTitle leftString={"Day 1"} rightString={"1:30pm"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <LoopOverviewList loopItems={this.fetchLoopItems()}></LoopOverviewList>
        </div>
    }

    fetchLoopItems(): Array<LoopItem> {
        let loopItems: Array<LoopItem> = [
            {
                icon: Icons.chat,
                primaryText: "Test",
                secondaryText: "Test",
                minutes: 30
            },
        ]
        return loopItems;
    }
}