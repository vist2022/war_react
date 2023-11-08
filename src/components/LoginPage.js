import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state= { name:''}
    }

    handleInputOnChangeName = (e)=> this.setState({...this.state, name:e.target.value})

    handleOnClickStart = async (e)=>
    {
        e.preventDefault();
       await this.props.changePage('game');
       await this.props.newPlayer(this.state.name);
    }

    render() {
            return (
                <div className={'container w-50 h-50 text-center my-5 shadow p-3 mb-5 bg-body-tertiary rounded'}>
                    <div >
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
                               onChange={this.handleInputOnChangeName}
                               required={true}
                        />
                    </div>
                    <div className={'my-5'}>
                        <button
                            type={'submit'}
                            className={'btn btn-l btn-danger w-25'}
                            onClick={this.handleOnClickStart}
                            >
                            START
                        </button>
                    </div>
                </div>
            );
        }

}

export default LoginPage;