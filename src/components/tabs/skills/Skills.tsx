import React from "react";
import TabHeader from "../shared/TabHeader";
import TabTitle from "../shared/TabTitle";


export default class Skills extends React.Component {
    render() {
        let tabHeaders = [<h2>Skill</h2>, <h2 style={{paddingLeft: '10px', marginRight: '50%', textAlign:"right", transform:`translate(100%, 0%)`}}>Info</h2>]
        return <div>
            <TabTitle leftString={"Skills"}></TabTitle>
            <TabHeader tabHeaders={tabHeaders}></TabHeader>
            </div>
    }
}