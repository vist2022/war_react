import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPointsAction} from "../redux/actions/pointsAction";
import {winner} from "../utils/gameUtils";

const ResultPage = () => {

	const history = useHistory();
	const name = useSelector(state => state.name);
	const points = useSelector(state => state.points);
	const dispatch = useDispatch();


	return (
		<div className={'container w-50 h-50 text-center my-5 shadow p-3 mb-5 bg-body-tertiary rounded'}>
			<div className={'my-3'}>
                <span className={'fs-1 fw-bold'}>
                  {winner(points.computer, points.player, name)}
                </span>
			</div>
			<div className={'my-3'}>
				<span className={'fs-1 fw-bold'}>{points.computer} - {points.player}</span>
			</div>
			<button className={'btn btn-secondary my-3 mx-2'}
			        onClick={() => {
						history.push('game')
				        dispatch(resetPointsAction(0));
					}}>Again?
			</button>
			<button className={'btn btn-secondary my-3 mx-2'}
			        onClick={() => {
						history.push('start')
				        dispatch(resetPointsAction(0));
			        }}>Game over
			</button>
		</div>
	);
};

export default ResultPage;