const age = 12;
const price = 500;

if (age <= 12){
    console.log('you can eat for free');
}
else if (age >= 40){
    // 10% discount for normal age people
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 50){
    // 25% discount for middle age people
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 60){
    // 50% discount for old age people
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}