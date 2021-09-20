import React from "react";
import Icons from "../../../utils/Icons";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";


export default class Combat extends React.Component {
    render() {
        let avgCombatScore = 78;
        let tabHeaders = [<h2>Combat!</h2>, <p style={{marginRight: 10}} >Avg. Combat Score: {avgCombatScore}</p>]
        return <div>
            <TabTitle leftString={"Combat"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
        </div>
    }
}