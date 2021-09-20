import React from "react";
import Icons from "../../../utils/Icons";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";


export default class LoopPlanner extends React.Component {
    render() {
        let tabHeaders = [<h2>Action</h2>,
        <div>
            <div style={{ display:"inline", marginRight: 24 }}>{Icons.clock}</div>
            <div style={{ display:"inline", marginRight: 24 }}>{Icons.repeat}</div>
        </div>]

        return <div>
            <TabTitle leftString={"Loop Planner"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
        </div>
    }
}