import React from "react";
import Icons from "../../../utils/Icons";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import MainActions from "./MainActions";
import SubActions from "./SubActions";
import './Actions.css'


export default class Actions extends React.Component {
    render() {
        let tabHeaders = [<h2>Action</h2>,
        <div>
            <p style={{ display: "inline", marginRight: 24 }}>{Icons.clock}</p>
            <p style={{ display: "inline", marginRight: 24 }}>{Icons.repeat}</p>
        </div>]
        return <div>
            <TabTitle leftString={"Choose Actions"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <div id="actions-container"><MainActions></MainActions>
                <SubActions></SubActions></div>
        </div>
    }
}