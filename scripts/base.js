
export function firstBase(array, on){
    if(on == true){
        baseFull(array, 24, 26);
    } else {
        baseEmpty(array, 24, 26);
    }
}

export function secondBase(array, on){
    if(on == true){
        baseFull(array, 19, 21);
    } else {
        baseEmpty(array, 19, 21);
    }
}

export function thirdBase(array, on){
    if(on == true){
        baseFull(array, 24, 16);
    } else {
        baseEmpty(array, 24, 16);
    }
}

function baseEmpty(array, startingRow, startingColumn){
    
    let count = 0;
    let count2 = 3;
    for(let i = 0; i < 7; i++){
        if(count < 4){
            array.push(startingRow + i, startingColumn + count);
            array.push(startingRow + i, startingColumn - count);
            count++;
        } else {
            count2--;
            array.push(startingRow + i, startingColumn + count2);
            array.push(startingRow + i, startingColumn - count2);
        }
    }
}

function baseFull(array, startingRow, startingColumn){

    let count = 1;
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < count; j++){
            if(count < 5){
                array.push(startingRow + i, startingColumn + j);
                array.push(startingRow + i, startingColumn - j);
            }   
        }
        count++;
    }

    let count2 = 3;
    for(let i = 4; i < 7; i++){
        for(let j = 0; count2 > j; j++){
                array.push(startingRow + i, startingColumn + j);
                array.push(startingRow + i, startingColumn - j);
        }
        count2--;
    }


}

