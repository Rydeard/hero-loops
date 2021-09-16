import React from "react";
import LoopOverviewListItem from "./LoopOverviewListItem";

declare global {type LoopItem = {
    icon:React.ReactElement
    primaryText:string
    secondaryText:string
    minutes:number
}}

type LoopOverviewListProps = {
    loopItems:Array<LoopItem>
}

export default class LoopOverviewList extends React.Component<LoopOverviewListProps> {
    constructor(props:LoopOverviewListProps){
        super(props)
    }
    render() {
        let loopListItems: Array<JSX.Element> = [];
        this.props.loopItems.forEach((loopItem, index) => {
            loopListItems.push(
                <LoopOverviewListItem key={index}
                loopItem={loopItem}>
                </LoopOverviewListItem>
            )
        })
        return <ol id="loop-overview-list">
            {loopListItems}
        </ol>
    }
}