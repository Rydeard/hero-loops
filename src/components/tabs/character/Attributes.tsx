import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";


export default class Attributes extends React.Component {
    render() {
        let tabHeaders = [<h2>Stats</h2>]
        return <div>
            <TabTitle leftString={"Attributes"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            </div>
    }
}