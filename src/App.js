import React, {Component} from 'react';
import LoginPage from "./components/LoginPage";
import GamePage from "./components/GamePage/GamePage";
import ResultPage from "./components/ResultPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.resPoints =
            {
                computer: 0,
                player: 0
            }
        this.state = {
            page: 'login',
            playerName: '',

        }
    }

    newPlayer = (name) => {
        this.setState({...this.state, playerName: name})
    }
    changePage = (page) => {
        this.setState({...this.state, page: page})
    }
    points = (comp, player) => {
        this.resPoints= {computer: comp, player: player}
    }

    render() {
        let Component;
        switch (this.state.page) {
            case 'game':
                return Component =
                    <GamePage
                        player={this.state.playerName}
                        changePage={this.changePage}
                        points={this.points}
                    />;
            case 'result':
                return Component =
                    <ResultPage
                        changePage={this.changePage}
                        resPoints={this.resPoints}
                        name={this.state.playerName}
                    />;
            default:
                return Component =
                    <LoginPage
                        newPlayer={this.newPlayer}
                        changePage={this.changePage}
                    />;
        }
        return (
            <div>
                {Component}
            </div>
        );
    }
}

export default App;