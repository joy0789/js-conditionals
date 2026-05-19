// Free Drink
// var burger = 600;
// if (burger > 500) {
//     console.log('here is your free coke');
// }
// else{
//     console.log('you have to pay 30tk more for coke');
// }

// ----------------------------------

// BMI Calculator
// weight = 60;
// height = 1.83;
// BMI = weight / (height)**2;
// if (BMI < 18.5){
//     console.log('you are underweight');
// }
// else if (BMI >= 18.5 && BMI <= 24.9){
//     console.log('you are normal');
// }
// else if (BMI >= 25 && BMI <= 29.9){
//     console.log('you are overweight');
// }
// else{
//     console.log('you are obese');
// }

// ------------------------------------

// Grade Calculator
// let result = 80;
// if (result >=90 && result <=100){
//     console.log('you got A');
// }
// else if (result >=80 && result <=89){
//     console.log('you got B');
// }
// else if (result >=70 && result <=79){
//     console.log('you got C');
// }
// else if (result >=60 && result <=69){
//     console.log('you got D');
// }

// else{
//     console.log('you got F');
// }

// -----------------------------------

// Nested Friend
// let myResult = 85;
// let friendResult = 75;
// if (myResult >= 80) {
//     if (friendResult >= 80) {
//         console.log('lets go for a lunch');
//     }
//     else if (friendResult < 80 && friendResult >= 60){
//         console.log('good luck next time');
//     }
//     else if (friendResult < 60 && friendResult >= 40){
//         console.log("keep your friend's message unseen");
//     }
//     else{
//         console.log("block your friend. just joking");
//     }
// }
// else{
//     console.log("go to home and sleep and act sad");
// }

// ---------------------------------

// ternary-number

// let num1 = 20;
// let num2 = 10;
// let result;

// // simple code
// if (num1 > num2){
//     result = num1 * 2;
// }
// else{
//     result = num1 + num2;
// }

// // ternary
// num1 > num2 ? result = num1 * 2 : result = num1 + num2;
// console.log(result);

// ----------------------------------

// bus fare calculator
let age = 50;
let ticketPrice = 800;
let isStudent = true;
if (age < 10){
    // for children
    console.log("the ticket is free");
}
else if (isStudent === true){
    // students gets 50% discount
    discount = ticketPrice * 50 /100;
    ticketFee = ticketPrice - discount;
    console.log(ticketFee);
}
else if (age >= 60){
    // senior citizens gets 15% discount
    discount = ticketPrice * 15 /100;
    ticketFee = ticketPrice - discount;
    console.log(ticketFee);
}
else{
    console.log(ticketPrice);
}