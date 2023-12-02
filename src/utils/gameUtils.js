

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


