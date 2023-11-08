


export const cardsDealing =(cards) =>
{
    cards.sort(()=>Math.random()-0.5);

    let res =  cards.splice(0,26)

    return res
}