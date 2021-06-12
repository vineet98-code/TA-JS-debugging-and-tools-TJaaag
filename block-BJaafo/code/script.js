function fullName(firstName, lastName){
    return firstName + '' + lastName
}

let result = fullName('Alt', 'Campus');

let expected = 'AltCampu';

if(result !== expected){
    throw new Error('${result} is not equal to ${expected}')
}

// AltCampus is not equal to AltCampu

function totalAmount(amount, taxRate){
    return amount + (amount * taxRate) 
 }
 
 let total = totalAmount(2000, 0.17);
 
 let expect = 234;
 if(total !== expect){
     throw new Error(`${total} is not equal to ${expect}`);
 }

 // 2340 is not equal to 234