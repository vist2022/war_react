import React, {Component} from 'react';
import {cardDeck} from "../../utils/constants";
import {cardsDealing} from "../../utils/cardsDealing";
import style from './GamePage.module.css';


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.cards = [...cardDeck];
        this.computersPoints = 0;
        this.playersPoints = 0;
        this.roundNumber = 1;
        this.nextStyle = style.redOnWhite;
        this.state =
            {
                computersCards: cardsDealing(this.cards),
                playersCards: this.cards,
            }
    }

    handleOnClickNext = () => {
        this.nextStyle = this.nextStyle === style.redOnWhite ? style.whiteOnRed : style.redOnWhite;
        if (this.state.playersCards.length === 1) {
            this.addPoints();
            this.props.changePage('result');
            this.props.points(this.computersPoints, this.playersPoints)
        } else {
            this.addPoints();
            this.removeCards();
            this.roundNumber++;
        }
    }
    removeCards = () => {
        let temp = {...this.state}
        temp.computersCards.splice(0, 1);
        temp.playersCards.splice(0, 1);
        this.setState(temp)
    }
    addPoints = () => {
        const comp = parseInt(this.state.computersCards[0].cost);
        const player = parseInt(this.state.playersCards[0].cost)

        if (comp > player)
            this.computersPoints++;
        else if (comp < player)
            this.playersPoints++;
    }

    render() {
        return (
            <div className={'container w-50 h-75  mt-3 shadow p-3 mb-5 bg-body-tertiary rounded'}>
                <div className={'row text-center fs-4 fw-bold text-danger'}><span>Round {this.roundNumber}</span></div>
                <div className={'row text-start mx-3 fs-5 fw-bold text-secondary'}>
                    <span>Computer - {this.computersPoints} points</span></div>
                <div className={'d-flex w-100  my-3 text-center'}>
                    <div className={'col align-self-start '} style={{width: '120px', height: '170px'}}>
                        <img src={this.state.computersCards[0].url} alt={this.state.computersCards[0].cost}
                             width={'120px'} className={`${style.noSelect} shadow p-3 mb-5 bg-body-tertiary rounded`}/>
                    </div>
                    <div className={'col align-self-center '}>
                        <div
                            onClick={this.handleOnClickNext}
                            className={`col align-self-center ${style.nextDiv}`}>
                            <p className={this.nextStyle}>NEXT</p>
                        </div>
                    </div>
                    <div className={'col align-self-end'} style={{width: '120px', height: '170px'}}>
                        <img src={this.state.playersCards[0].url} alt={this.state.playersCards[0].cost}
                             width={'120px'} className={`${style.noSelect} shadow p-3 mb-5 bg-body-tertiary rounded`}/>
                    </div>
                </div>

                <div className={'row text-end my-1 mx-4 mx-3 fs-5 fw-bold text-secondary'}>
                    <span>{this.props.player || 'Player'} : {this.playersPoints} points</span></div>
            </div>
        );
    }
}

export default GamePage;