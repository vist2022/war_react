import {gameUtils} from "../../utils/gameUtils";
import {cardDeck} from "../../utils/constants";
import {SET_CARDS, REMOVE_CARDS} from "../actions/cardsAction"

const temp = [...cardDeck];
const initialState = {
	computersCard: gameUtils(temp),
	playersCards: temp,
}

function cardsReducer(cards = initialState, action) {
	switch (action.type) {
		case REMOVE_CARDS:
			return {
				...cards,
				computersCard: cards.computersCard.slice(1),
				playersCards: cards.playersCards.slice(1),
			};
		case SET_CARDS:
			const temp = [...cardDeck]
			return {
				...cards,
				computersCard: gameUtils(temp),
				playersCards: temp,
			};
		default:
			return cards;
	}
}

export default cardsReducer;