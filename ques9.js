function discount(price, percent) {
    return price - (price * percent / 100);
}

function createCalculator(percent) {
    return function(price) {
        return discount(price, percent);
    };
}

let d10 = createCalculator(10);
let d20 = createCalculator(20);
let d30 = createCalculator(30);

console.log(d10(1000));
console.log(d20(1000));
console.log(d30(1000));