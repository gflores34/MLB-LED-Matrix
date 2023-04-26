import * as numbers from './numbers.js';
import * as base from './base.js';

export function onBase(array, first, second, third){
    base.firstBase(array, first);
    base.secondBase(array, second);
    base.thirdBase(array, third);
}


export function frame(array, top){
    
    let startingRow = 15;
    let startingColumn = 24;

    if(top == true){
        let count = 1;
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < count; j++){
                if(count < 4){
                    array.push(startingRow + i, startingColumn + j);
                    array.push(startingRow + i, startingColumn - j);
                }   
            }
            count++;
        }
    }else {
        let count2 = 3;
        for(let i = 2; i < 5; i++){
            for(let j = 0; count2 > j; j++){
                    array.push(startingRow + i, startingColumn + j);
                    array.push(startingRow + i, startingColumn - j);
            }
            count2--;
        }
    }
}

export function inningNumber(array, number){
    switch(number){
        case 1: numbers.one(array, 15, 28);
                break;

        case 2: numbers.two(array, 15, 28);
                break;

        case 3: numbers.three(array, 15, 28);
                break;

        case 4: numbers.four(array, 15, 28);
                break;

        case 5: numbers.five(array, 15, 28);
                break;

        case 6: numbers.six(array, 15, 28);
                break;

        case 7: numbers.seven(array, 15, 28);
                break;

        case 8: numbers.eight(array, 15, 28);
                break;

        case 9: numbers.nine(array, 15, 28);
                break;

        default: numbers.zero(array, 15, 28);
                 break;





    }
}