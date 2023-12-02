import {removeCards, setCards} from "../redux/actions/cardsAction";
import style from "../components/GamePage/GamePage.module.css";
import {setPointsAction} from "../redux/actions/pointsAction";


export const gameUtils = (cards) => {
	cards.sort(() => Math.random() - 0.5);

	return cards.splice(0, 26)
}

export const winner = (computerPoints, playerPoints, name) => {
	if (computerPoints > playerPoints) {
		return `I'm sorry ${name || 'Player'}, you lose((`;
	} else if (computerPoints < playerPoints) {
		return `Congrats ${name || 'Player'}, you win!!))`;
	} else {
		return `Draw!`
	}
}
export const handleOnClickNext = (dispatch, history, roundNumber, cards, nextStyle) => {
	nextStyle.current = nextStyle.current === style.redOnWhite ? style.whiteOnRed : style.redOnWhite;
	if (cards.playersCards.length === 1) {
		dispatch(setCards());
		dispatch(setPointsAction(parseInt(cards.computersCard[0].cost), parseInt(cards.playersCards[0].cost)));
		history.push('result');
	} else {
		dispatch(removeCards());
		dispatch(setPointsAction(parseInt(cards.computersCard[0].cost), parseInt(cards.playersCards[0].cost)));
		roundNumber.current++;
	}
}


