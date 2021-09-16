import './App.css';
import TabBar from './components/main/TabBar';
import 'typeface-inter';
import GameTickTest from './components/main/GameTickTest';
import React from 'react';
import LayoutContainer from './components/containers/LayoutContainer';
import LoopOverview from './components/tabs/home/LoopOverview';

type AppProps = {
}

type AppState = {
  gameTick: number
  prevGameTick: number
  deltaTime: number
  intervalRef?: NodeJS.Timeout
}

type GameData = {

}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      gameTick: 0,
      prevGameTick: 0,
      deltaTime: 0
    }
  }

  render() {
    //        <GameTickTest gameTick={this.state.gameTick}></GameTickTest>

    return (
      <div>
        <TabBar tabs={["Home", "Loop", "Character", "Skills"]}></TabBar>
        <LayoutContainer leftContainerContent={<LoopOverview></LoopOverview>} rightContainerContent={<div></div>}></LayoutContainer>
      </div>

    );
  }

  tick() {
    this.setState(state => ({
      prevGameTick: state.gameTick,
      gameTick: Date.now(),
      deltaTime: state.gameTick - state.prevGameTick
    }));
  }

  componentDidMount() {
    this.tick()
    let interval = setInterval(() => { this.tick() }, 1000);
    this.setState({ intervalRef: interval });
  }
}