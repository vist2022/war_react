import React from 'react';

const ErrorPage = () => {
	return (
		<div className={'container w-50 h-50 text-center my-5 shadow p-3 mb-5 bg-body-tertiary rounded'}>
			<div>
				<span className={'fs-1 fw-bold text-danger mx-auto my-5 '} id={'ready'}>O o p s... Page not found</span>
			</div>
			<div>
				<img className={'mx-5'} src={require('../style/img/warLeft.png')} width={'200px'}/>
				<img className={'mx-5'} src={require('../style/img/warRight.png')} width={'200px'}/>
			</div>
		</div>
	);
};

export default ErrorPage;