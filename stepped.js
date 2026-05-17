const price = 5000;

if (price >= 5000) {
    // 10% discount
    const discountPrice = price * 10 /100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if (price >= 2500) {
    // 10% discount
    const discountPrice = price * 5 /100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}