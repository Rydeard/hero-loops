import React from "react";
import Icons from "../../../utils/Icons";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import LoopPlannerGrid from "./LoopPlannerGrid";
import './LoopPlanner.css';


export default class LoopPlanner extends React.Component {
    render() {
        let tabHeaders = [<h2>Action</h2>]

        return <div>
            <TabTitle leftString={"Loop Planner"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <LoopPlannerGrid loopItems={this.fetchLoopItems()}></LoopPlannerGrid>
        </div>
    }

    fetchLoopItems(): Array<LoopItem> {
        let loopItems: Array<LoopItem> = [
            {
                icon: Icons.hiking,
                primaryText: "Explore",
                secondaryText: "Dark Caverns",
                minutes: 30,
                repeats: 1,
                priority: 1,
            },
            {
                icon: Icons.hiking,
                primaryText: "Explore",
                secondaryText: "Dark Caverns",
                minutes: 60,
                repeats: 1,
                priority: 1,
            },
            {
                icon: Icons.hiking,
                primaryText: "Explore",
                secondaryText: "Dark Caverns",
                minutes: 120,
                repeats: 1,
                priority: 1,
            },
        ]
        return loopItems;
    }

    sortLoopItems(loopItems:Array<LoopItem>){
        return loopItems.sort()
    }
}