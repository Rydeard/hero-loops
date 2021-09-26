import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import LoopOverviewList from "./LoopOverviewList";
import './LoopOverview.css'
import Icons from "../../../utils/Icons";
import { connect, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppSelector } from "../../../app/hooks";


type LoopOverviewProps = {
    loopItems: Array<LoopItem>
}

class LoopOverview extends React.Component<LoopOverviewProps> {
    render() {
        let loopItems: Array<LoopItem> = this.props.loopItems;

        let tabHeaders = [<h2>Exploring...</h2>, <div style={{marginRight: 6}}>{Icons.clock}</div>]

        let x = <div></div>
        // set x style to background-color:red

        return <div>
            <TabTitle leftString={"Day 1"} rightString={"1:30pm"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <LoopOverviewList loopItems={loopItems}></LoopOverviewList>
        </div>
    }
}

const mapStateToProps = (state:RootState) => ({
    loopItems: state.gameDataReducer.loopItems
});

export default connect(mapStateToProps)(LoopOverview);