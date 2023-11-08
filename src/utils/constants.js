import c2 from '../style/img/cards/2_of_clubs.png';
import d2 from '../style/img/cards/2_of_diamonds.png';
import h2 from '../style/img/cards/2_of_hearts.png';
import s2 from '../style/img/cards/2_of_spades.png';
import c3 from '../style/img/cards/3_of_clubs.png';
import d3 from '../style/img/cards/3_of_diamonds.png';
import h3 from '../style/img/cards/3_of_hearts.png';
import s3 from '../style/img/cards/3_of_spades.png';
import c4 from '../style/img/cards/4_of_clubs.png';
import d4 from '../style/img/cards/4_of_diamonds.png';
import h4 from '../style/img/cards/4_of_hearts.png';
import s4 from '../style/img/cards/4_of_spades.png';
import c5 from '../style/img/cards/5_of_clubs.png';
import d5 from '../style/img/cards/5_of_diamonds.png';
import h5 from '../style/img/cards/5_of_hearts.png';
import s5 from '../style/img/cards/5_of_spades.png';
import c6 from '../style/img/cards/6_of_clubs.png';
import d6 from '../style/img/cards/6_of_diamonds.png';
import h6 from '../style/img/cards/6_of_hearts.png';
import s6 from '../style/img/cards/6_of_spades.png';

import c7 from '../style/img/cards/7_of_clubs.png';
import d7 from '../style/img/cards/7_of_diamonds.png';
import h7 from '../style/img/cards/7_of_hearts.png';
import s7 from '../style/img/cards/7_of_spades.png';

import c8 from '../style/img/cards/8_of_clubs.png';
import d8 from '../style/img/cards/8_of_diamonds.png';
import h8 from '../style/img/cards/8_of_hearts.png';
import s8 from '../style/img/cards/8_of_spades.png';

import c9 from '../style/img/cards/9_of_clubs.png';
import d9 from '../style/img/cards/9_of_diamonds.png';
import h9 from '../style/img/cards/9_of_hearts.png';
import s9 from '../style/img/cards/9_of_spades.png';

import c10 from '../style/img/cards/10_of_clubs.png';
import d10 from '../style/img/cards/10_of_diamonds.png';
import h10 from '../style/img/cards/10_of_hearts.png';
import s10 from '../style/img/cards/10_of_spades.png';

import c11 from '../style/img/cards/jack_of_clubs2.png';
import d11 from '../style/img/cards/jack_of_diamonds2.png';
import h11 from '../style/img/cards/jack_of_hearts2.png';
import s11 from '../style/img/cards/jack_of_spades2.png';

import c12 from '../style/img/cards/queen_of_clubs2.png';
import d12 from '../style/img/cards/queen_of_diamonds2.png';
import h12 from '../style/img/cards/queen_of_hearts2.png';
import s12 from '../style/img/cards/queen_of_spades2.png';

import c13 from '../style/img/cards/king_of_clubs2.png';
import d13 from '../style/img/cards/king_of_diamonds2.png';
import h13 from '../style/img/cards/king_of_hearts2.png';
import s13 from '../style/img/cards/king_of_spades2.png';

import c14 from '../style/img/cards/ace_of_clubs.png';
import d14 from '../style/img/cards/ace_of_diamonds.png';
import h14 from '../style/img/cards/ace_of_hearts.png';
import s14 from '../style/img/cards/ace_of_spades.png';



const cardsURL =
    [
        {2: [c2, d2, h2, s2]},
        {3: [c3, d3, h3, s3]},
        {4: [c4, d4, h4, s4]},
        {5: [c5, d5, h5, s5]},
        {6: [c6, d6, h6, s6]},
        {7: [c7, d7, h7, s7]},
        {8: [c8, d8, h8, s8]},
        {9: [c9, d9, h9, s9]},
        {10: [c10, d10, h10, s10]},
        {11: [c11, d11, h11, s11]},
        {12: [c12, d12, h12, s12]},
        {13: [c13, d13, h13, s13]},
        {14: [c14, d14, h14, s14]},
    ];
let cards = [];
for (let i = 2; i <= 14; i++) {
    let cost = i;
    cards.push({cost: [`${cost}`], url : cardsURL[i-2][i][0]});
    cards.push({cost: [`${cost}`], url : cardsURL[i-2][i][1]});
    cards.push({cost: [`${cost}`], url : cardsURL[i-2][i][2]});
    cards.push({cost: [`${cost}`], url : cardsURL[i-2][i][3]});
}

// cardDeck.sort(()=>Math.random()-0.5)
export const cardDeck = cards;