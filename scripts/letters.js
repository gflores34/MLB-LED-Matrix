
export function getLetter(array, letter, startingRow, startingColumn){
    letter = letter.toLowerCase();

    switch(letter){

        case 'a': a(array, startingRow, startingColumn);
                  break;
        
        case 'b': b(array, startingRow, startingColumn);
                  break;
        
        case 'c': c(array, startingRow, startingColumn);
                  break;
        
        case 'd': d(array, startingRow, startingColumn);
                  break;
        
        case 'e': e(array, startingRow, startingColumn);
                  break;

        case 'f': f(array, startingRow, startingColumn);
                  break;

        case 'g': g(array, startingRow, startingColumn);
                  break;

        case 'h': h(array, startingRow, startingColumn);
                  break;

        case 'i': i(array, startingRow, startingColumn);
                  break;

        case 'j': j(array, startingRow, startingColumn);
                  break;

        case 'k': k(array, startingRow, startingColumn);
                  break;

        case 'l': l(array, startingRow, startingColumn);
                  break;

        case 'm': m(array, startingRow, startingColumn);
                  break;

        case 'n': n(array, startingRow, startingColumn);
                  break;

        case 'o': o(array, startingRow, startingColumn);
                  break;

        case 'p': p(array, startingRow, startingColumn);
                  break;

        case 'q': q(array, startingRow, startingColumn);
                  break;

        case 'r': r(array, startingRow, startingColumn);
                  break;

        case 's': s(array, startingRow, startingColumn);
                  break;

        case 't': t(array, startingRow, startingColumn);
                  break;

        case 'u': u(array, startingRow, startingColumn);
                  break;

        case 'v': v(array, startingRow, startingColumn);
                  break;

        case 'w': w(array, startingRow, startingColumn);
                  break;

        case 'x': x(array, startingRow, startingColumn);
                  break;

        case 'y': y(array, startingRow, startingColumn);
                  break;
        
        case 'z': z(array, startingRow, startingColumn);
                  break;

        default: console.log("Letter error: " + letter);
    }
}

export function error(array, startingRow, startingColumn){
    e(array, 1, 1);
    r(array, 1, 5);
    r(array, 1, 9);
    o(array, 1, 13);
    r(array, 1, 17);
}


export function a(array, startingRow, startingColumn){
    for(let i = 1; i < 5; i++){array.push(startingRow + i, startingColumn);}

    for(let i = 1; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow, startingColumn + 1);
    array.push(startingRow + 2, startingColumn + 1);

}

export function b(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 2, startingColumn + i);}

    array.push(startingRow, startingColumn + 1);
    array.push(startingRow + 1, startingColumn + 2);

    array.push(startingRow + 4, startingColumn + 1);
    array.push(startingRow + 3, startingColumn + 2);
}

export function c(array, startingRow, startingColumn){
    for(let i = 1; i < 4; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 1; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 1; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}
}

export function d(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 1; i < 3; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow, startingColumn + 1);
    array.push(startingRow + 1, startingColumn + 2);

    array.push(startingRow + 4, startingColumn + 1);
    array.push(startingRow + 3, startingColumn + 2);

}

export function e(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 1; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 1; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}

    array.push(startingRow + 2, startingColumn + 1);

}

export function f(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 1; i < 3; i++){array.push(startingRow, startingColumn + i);}

    array.push(startingRow + 2, startingColumn + 1);

}

export function g(array, startingRow, startingColumn){
    for(let i = 1; i < 4; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 1; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 1; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}

    for(let i = 2; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}
}

export function h(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 2, startingColumn + 1);
}

export function i(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 1);}
    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}
}

export function j(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}

    array.push(startingRow + 3, startingColumn);
}

export function k(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 2; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 3; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 2, startingColumn + 1);
}

export function l(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}
}

export function m(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 1, startingColumn + 1);
}

export function n(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow, startingColumn + 1);
}

export function o(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow, startingColumn + 1);
    array.push(startingRow + 4, startingColumn + 1);
}

export function p(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 2, startingColumn + i);}

    array.push(startingRow + 1, startingColumn + 2);
}

export function q(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 2, startingColumn + i);}

    array.push(startingRow + 1, startingColumn);
}

export function r(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 2; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 3; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow, startingColumn + 1);
    array.push(startingRow + 2, startingColumn + 1);
}

export function s(array, startingRow, startingColumn){

    let count = 1;
    for(let i = 0; i < 3; i++){
        array.push(startingRow + count, startingColumn + i);
        count++;
    }
    
    for(let i = 1; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 0; i < 2; i++){array.push(startingRow + 4, startingColumn + i);}
}

export function t(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 1);}
    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i);}
}

export function u(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 4, startingColumn + 1);
}

export function v(array, startingRow, startingColumn){
    for(let i = 0; i < 4; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 4; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 4, startingColumn + 1);
}

export function w(array, startingRow, startingColumn){
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 0; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    array.push(startingRow + 3, startingColumn + 1);
}

export function x(array, startingRow, startingColumn){
    for(let i = 0; i < 2; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 3; i < 5; i++){array.push(startingRow + i, startingColumn + 2);}

    for(let i = 0; i < 2; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 3; i < 5; i++){array.push(startingRow + i, startingColumn);}
    
    
    array.push(startingRow + 2, startingColumn + 1);
}

export function y(array, startingRow, startingColumn){
    for(let i = 0; i < 3; i++){array.push(startingRow + i, startingColumn + 2);}
    for(let i = 0; i < 3; i++){array.push(startingRow + i, startingColumn);}
    for(let i = 3; i < 5; i++){array.push(startingRow + i, startingColumn + 1);}
}

export function z(array, startingRow, startingColumn){
    let count = 3;
    for(let i = 0; i < 3; i++){
        array.push(startingRow + count, startingColumn + i);
        count--;
    }

    for(let i = 0; i < 3; i++){array.push(startingRow, startingColumn + i);}
    for(let i = 0; i < 3; i++){array.push(startingRow + 4, startingColumn + i);}
}


export function test(array){
    z(array,1,1);
}
