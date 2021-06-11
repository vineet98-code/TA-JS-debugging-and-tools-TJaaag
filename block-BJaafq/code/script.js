function add(numA, numB){
    return numA + numB
}
let result = add(2,3);

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}


function add(numA, numB){
    return numA + numB
}
let result = add('hello','hi');

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}


function add(numA, numB){
    return numA + numB
}
let result = add(9, 'hi');

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}


function add(numA, numB){
    return numA + numB
}
let result = add( 'hi');

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}


function add(numA, numB){
    return numA + numB
}
let result = add( );

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}