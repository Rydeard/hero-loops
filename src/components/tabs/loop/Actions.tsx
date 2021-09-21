import React from "react";
import Icons from "../../../utils/Icons";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import MainActions from "./MainActions";
import SubActions from "./SubActions";
import './Actions.css'
import { transform } from "typescript";


export default class Actions extends React.Component {
    render() {
        let tabHeaders = [<h2>Areas</h2>, <h2 style={{paddingLeft: '10px', marginRight: '50%', textAlign:"right", transform:`translate(100%, 0%)`}}>Hythe Actions</h2>]
        return <div>
            <TabTitle leftString={"Actions"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <div id="actions-container"><MainActions></MainActions>
                <SubActions></SubActions></div>
        </div>
    }
}