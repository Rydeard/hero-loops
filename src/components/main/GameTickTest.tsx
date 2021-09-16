import React from "react"

type GameTickTestProps = {
    gameTick: number;
}

type GameTickTestState = {
}

export default class GameTickTest extends React.Component<GameTickTestProps, GameTickTestState> {
    constructor(props: GameTickTestProps) {
        super(props)
        this.state = { gameTick: 0 }
    }
    render() {
        return <div>{this.props.gameTick}</div>
    }
}