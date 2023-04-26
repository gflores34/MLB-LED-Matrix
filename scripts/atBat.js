import * as led from './led.js';
import * as numbers from './numbers.js';




export function current(array, ball, strike, outNum){

    balls(array, ball);
    strikes(array, strike);
    outs(array, outNum);
    hyphen(array, 20, 5);
    
}




export function hyphen(array, startingRow, startingColumn){
    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i)};
}

export function balls(array, number){

    switch(number){
        case 1: numbers.one(array, 18, 1);
                break;
        
        case 2: numbers.two(array, 18, 1);
                break;

        case 3: numbers.three(array, 18, 1);
                break;
            
        case 4: numbers.four(array, 18, 1);
                break;

        default: numbers.zero(array, 18, 1);
                 break;
    }

}



export function strikes(array, number){
    
    switch(number){
        case 1: numbers.one(array, 18, 9);
                break;

        case 2: numbers.two(array, 18, 9);
                break;

        case 3: numbers.three(array, 18, 9);
                break;
        
        default: numbers.zero(array, 18, 9);
                 break;

    }
}

function outs(array, number){
    
    switch(number){

        case 1: out(array, 26, 1);
                break;

        case 2: out(array, 26, 1);
                out(array, 26, 5);
                break;

        case 3: out(array, 26, 1);
                out(array, 26, 5);
                out(array, 26, 9);
                break;

    }

}



function out(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            array.push(startingRow + i, startingColumn + j);
        }
    }
}