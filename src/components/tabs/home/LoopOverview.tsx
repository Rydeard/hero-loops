import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import LoopOverviewList from "./LoopOverviewList";
import './LoopOverview.css'


type LoopOverviewProps = {
}

export default class LoopOverview extends React.Component<LoopOverviewProps> {
    render() {
        return <div>
            <TabTitle leftString={"Day 1"} rightString={"1:30pm"}></TabTitle>
            <TabHeader leftString={"Exploring..."} rightString={"Test"}></TabHeader>
            <LoopOverviewList loopItems={this.fetchLoopItems()}></LoopOverviewList>
            </div>
    }

    fetchLoopItems():Array<LoopItem>{
        let loopItems:Array<LoopItem> = [
            {icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>,
                primaryText:"Test",
                secondaryText:"Test",
                minutes:30}
        ]
        return loopItems;
    }
}