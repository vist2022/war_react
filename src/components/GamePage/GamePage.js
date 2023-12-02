import React, {useRef} from 'react';
import style from './GamePage.module.css';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleOnClickNext} from "../../utils/gameUtils";


const GamePage = () => {

	const history = useHistory();
	const name = useSelector(state => state.name);
	const points = useSelector(state => state.points);
	const cards = useSelector(state => state.cards);
	const dispatch = useDispatch();

	const roundNumber = useRef(1);
	const nextStyle = useRef(style.redOnWhite);

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
						onClick={() => {handleOnClickNext(dispatch, history, roundNumber, cards, nextStyle)}}
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