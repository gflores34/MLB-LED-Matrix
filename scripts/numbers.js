
export function getNumber(array, number, startingRow, startingColumn){

    switch(number){
        case 1: one(array, startingRow, startingColumn);
                break;

        case 2: two(array, startingRow, startingColumn);
                break;

        case 3: three(array, startingRow, startingColumn);
                break;

        case 4: four(array, startingRow, startingColumn);
                break;

        case 5: five(array, startingRow, startingColumn);
                break;

        case 6: six(array, startingRow, startingColumn);
                break;

        case 7: seven(array, startingRow, startingColumn);
                break;

        case 8: eight(array, startingRow, startingColumn);
                break;

        case 9: nine(array, startingRow, startingColumn);
                break;

        case 0: zero(array, startingRow, startingColumn);
                break

    }

}



export function one(array, startingRow, startingColumn){
    
    for(let i = 0; i < 5; i++){

        array.push(startingRow + i);
        array.push(startingColumn + 1);
        
    }

    array.push(startingRow, startingColumn);
    array.push(startingRow + 4, startingColumn);
    array.push(startingRow + 4, startingColumn + 2);


    return array;
}

export function two(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){

        array.push(startingRow, startingColumn + i);
        array.push(startingRow + 2, startingColumn + i);
        array.push(startingRow + 4, startingColumn + i);

    }

    array.push(startingRow + 1, startingColumn + 2);
    array.push(startingRow + 3, startingColumn);

    return array;
}

export function three(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){

        array.push(startingRow, startingColumn + i);
        array.push(startingRow + 2, startingColumn + i);
        array.push(startingRow + 4, startingColumn + i);

    }

    array.push(startingRow + 1, startingColumn + 2);
    array.push(startingRow + 3, startingColumn + 2);

    return array;
}

export function four(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){array.push(startingRow + i, startingColumn)};
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2)};

    array.push(startingRow + 2, startingColumn + 1);
}

export function five(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){

        array.push(startingRow, startingColumn + i);
        array.push(startingRow + 2, startingColumn + i);
        array.push(startingRow + 4, startingColumn + i);

    }

    array.push(startingRow + 1, startingColumn);
    array.push(startingRow + 3, startingColumn + 2);

    return array;
    
}

export function six(array, startingRow, startingColumn){
    for(let i = 0; i < 3; i++){

        array.push(startingRow, startingColumn + i);
        array.push(startingRow + 2, startingColumn + i);
        array.push(startingRow + 4, startingColumn + i);

    }

    array.push(startingRow + 1, startingColumn);
    array.push(startingRow + 3, startingColumn + 2);
    array.push(startingRow + 3, startingColumn);

    return array;
}

export function seven(array, startingRow, startingColumn){

    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i)};

    array.push(startingRow + 1, startingColumn + 2);
    array.push(startingRow + 2, startingColumn + 1);
    array.push(startingRow + 3, startingColumn);
    array.push(startingRow + 4, startingColumn);
}

export function eight(array, startingRow, startingColumn){

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 3; j+=2){

        array.push(startingRow + i, startingColumn + j);

        }
    }

    for(let i = 0; i < 5; i+=2){
        array.push(startingRow + i, startingColumn + 1);
    }

    return array;
}

export function nine(array, startingRow, startingColumn){

    for(let i = 0; i < 5; i++){
        array.push(startingRow + i, startingColumn + 2);
    }

    for(let i = 0; i < 3; i+=2){
        for(let j = 0; j < 2; j++){
            array.push(startingRow + i, startingColumn + j);
        }
    }

    array.push(startingRow + 1, startingColumn);
}

export function zero(array, startingRow, startingColumn){

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 3; j+=2){

        array.push(startingRow + i, startingColumn + j);

        }
    }

    for(let i = 0; i < 5; i+=4){
        array.push(startingRow + i, startingColumn + 1);
    }

    return array;
}
    