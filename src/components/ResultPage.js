import React from 'react';

const ResultPage = ({changePage, resPoints,name }) => {

    const winner = ()=>
    {
        if (resPoints.computer>resPoints.player)
          return `I'm sorry ${name || 'Player'}, you lose((`;
        else if (resPoints.computer<resPoints.player)
            return `Congrats ${name || 'Player'}, you win!!))`;
        else
            return `Draw!`
    }

    return (
        <div className={'container w-50 h-50 text-center my-5 shadow p-3 mb-5 bg-body-tertiary rounded'}>
            <div className={'my-3'}>
                <span className={'fs-1 fw-bold'}>
                  {winner()}
                </span>
            </div>
            <div className={'my-3'}>
                <span className={'fs-1 fw-bold'}>{resPoints.computer} - {resPoints.player}</span>
            </div>
            <button className={'btn btn-secondary my-3 mx-2'}
            onClick={()=>changePage('game')}>Again?</button>
            <button className={'btn btn-secondary my-3 mx-2'}
                    onClick={()=>changePage('login')}>Game over</button>
        </div>
    );
};

export default ResultPage;