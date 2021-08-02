let array =  [19,22,3,28,26,17,18,4,28,0];
let B = array.reduceRight((a, c) => (a.push(c), a), []);
console.log(B);