function persistence(num) {
  let times = 0;
  while (num > 9) {
    //break number into an array
    let numArray = []
    numArray = [...String(num)]
    //take array to a single number
    num = numArray.reduce((a, b) => a * b)
    //console.log(num)
    //iterate times
    times = times + 1;
  }
  return times;
}

////////////////////////// tests //////////////////////////

let result = persistence(39);
let expected = 3;

console.log("Testing peristence of 39");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(4);
expected = 0;

console.log("Testing peristence of 4");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(25);
expected = 2;

console.log("Testing peristence of 25");
console.log(`Test passed: ${expected === result}\n`);

result = persistence(999);
expected = 4;

console.log("Testing peristence of 999");
console.log(`Test passed: ${expected === result}\n`);
