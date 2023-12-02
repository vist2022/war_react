import React, {useRef} from 'react';
import style from './GamePage.module.css';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPointsAction} from "../../redux/actions/pointsAction";
import {removeCards, setCards} from "../../redux/actions/cardsAction";


const GamePage = () => {

	const history = useHistory();
	const name = useSelector(state => state.name);
	const points = useSelector(state => state.points);
	const cards = useSelector(state => state.cards);
	const dispatch = useDispatch();

	const roundNumber = useRef(1);
	const nextStyle = useRef(style.redOnWhite);

	const handleOnClickNext = () => {
		if (cards.playersCards.length === 1) {
			dispatch(setCards());
			history.push('result');
		} else {
			dispatch(removeCards());
			roundNumber.current++;
		}
	}


	return (
		<div className={'container w-50 h-75  mt-3 shadow p-3 mb-5 bg-body-tertiary rounded'}>
			<div className={'row text-center fs-4 fw-bold text-danger'}><span>Round {roundNumber.current}</span></div>
			<div className={'row text-start mx-3 fs-5 fw-bold text-secondary'}>
				<span>Computer - {points.computer} points</span></div>
			<div className={'d-flex w-100  my-3 text-center'}>
				<div className={'col align-self-start '} style={{width: '120px', height: '170px'}}>
					<img src={cards.computersCard[0].url} alt={cards.computersCard[0].cost}
					     width={'120px'} className={`${style.noSelect} shadow p-3 mb-5 bg-body-tertiary rounded`}/>
				</div>
				<div className={'col align-self-center '}>
					<div
						onClick={() => {
							handleOnClickNext();
							nextStyle.current = nextStyle.current === style.redOnWhite ? style.whiteOnRed : style.redOnWhite;
							dispatch(setPointsAction(parseInt(cards.computersCard[0].cost), parseInt(cards.playersCards[0].cost)));
						}}
						className={`col align-self-center ${style.nextDiv}`}>
						<p className={nextStyle.current}>NEXT</p>
					</div>
				</div>
				<div className={'col align-self-end'} style={{width: '120px', height: '170px'}}>
					<img src={cards.playersCards[0].url} alt={cards.playersCards[0].cost}
					     width={'120px'} className={`${style.noSelect} shadow p-3 mb-5 bg-body-tertiary rounded`}/>
				</div>
			</div>

			<div className={'row text-end my-1 mx-4 mx-3 fs-5 fw-bold text-secondary'}>
				<span>{name || 'Player'} : {points.player} points</span></div>
		</div>
	);

}

export default GamePage;