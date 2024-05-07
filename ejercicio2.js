const { performance } = require('perf_hooks');
let start = performance.now();// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// iterative
start = performance.now();
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//conclusion: la iterativa es mas rapida que la recursiva
