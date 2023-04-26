import * as letters from './letters.js';
import * as numbers from './numbers.js';

export function homeTeam(array, firstLetter, secondLetter, thirdLetter){

    letters.getLetter(array, firstLetter, 1, 1);

    letters.getLetter(array, secondLetter, 1, 5);

    letters.getLetter(array, thirdLetter, 1, 9);

}

export function homeScore(array, score){
    
    if(score === undefined){
        score = 0;
    } else {
        var numberArray = Array.from(score.toString()).map(Number);
    }

    if(score.toString().length > 1){
        for(let i = 0; i < score.toString().length; i++){
            numbers.getNumber(array, numberArray[i], 1, 24 + (i * 4))
        }
    } else {
        numbers.getNumber(array, score, 1, 28);
    }
}

export function awayTeam(array, firstLetter, secondLetter, thirdLetter){

    letters.getLetter(array, firstLetter, 7, 1);

    letters.getLetter(array, secondLetter, 7, 5);

    letters.getLetter(array, thirdLetter, 7, 9);

}

export function awayScore(array, score){
    
    if(score === undefined){
        score = 0;
    } else {
        var numberArray = Array.from(score.toString()).map(Number);
    }

    if(score.toString().length > 1){
        for(let i = 0; i < score.toString().length; i++){
            numbers.getNumber(array, numberArray[i], 7, 24 + (i * 4))
        }
    } else {
        numbers.getNumber(array, score, 7, 28);
    }
}

