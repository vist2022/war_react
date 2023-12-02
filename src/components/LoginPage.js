import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNameAction} from "../redux/actions/nameAction";

const LoginPage = () => {

	const history = useHistory();
	const dispatch = useDispatch();
	const [inputName, setInputName] = useState('');

	return (
		<div className={'container w-50 h-50 text-center my-5 shadow p-3 mb-5 bg-body-tertiary rounded'}>
			<div>
				<span className={'fs-1 fw-bold text-danger mx-auto my-5 '} id={'ready'}>Ready for WAR??</span>
			</div>
			<div>
				<img className={'mx-5'} src={require('../style/img/warLeft.png')} width={'200px'}/>
				<img className={'mx-5'} src={require('../style/img/warRight.png')} width={'200px'}/>
			</div>
			<div className={'my-5'}>
				<input type={'text'}
				       placeholder={'Enter you name'}
				       className={'w-50'}
				       onChange={(e) => setInputName(e.target.value)}
				       required={true}
				/>
			</div>
			<div className={'my-5'}>
				<button
					type={'submit'}
					className={'btn btn-l btn-danger w-25'}
					onClick={() => {
						history.push('/game');
						dispatch(setNameAction(inputName))}}>
					START
				</button>
			</div>
		</div>
	);


}

export default LoginPage;