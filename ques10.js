let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);
let p4 = Promise.resolve(40);
let p5 = Promise.resolve(50);

Promise.all([p1, p2, p3, p4, p5]).then(function(result) {
    let sum = 0;

    for (let i = 0; i < result.length; i++) {
        sum = sum + result[i];
    }

    console.log(result);
    console.log("Total =", sum);
});