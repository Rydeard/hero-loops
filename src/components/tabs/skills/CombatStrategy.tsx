import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";


export default class CombatStrategy extends React.Component {
    render() {
        let tabHeaders = [<h2>Strategies</h2>]
        return <div>
            <TabTitle leftString={"Combat Strategy"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            </div>
    }
}