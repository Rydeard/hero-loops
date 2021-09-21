import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";
import Equipment from "./Equipment";
import Inventory from "./Inventory";
import './Items.css';


export default class Items extends React.Component {
    render() {
        let tabHeaders = [<h2>Equipment</h2>, <h2 style={{paddingLeft: '10px', marginRight: '50%', textAlign:"right", transform:`translate(100%, 0%)`}}>Inventory</h2>]

        return <div>
            <TabTitle leftString={"Items"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            <div id="items-container"><Equipment></Equipment>
                <Inventory></Inventory></div>
            </div>
    }
}