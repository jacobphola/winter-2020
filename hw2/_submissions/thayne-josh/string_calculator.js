class StringCalculator {
    Add(nums) {
        if (nums.length == 0) {
            return 0;
        }
        if (!nums.includes(",")) {
            return parseInt(nums);
        }
        var sum = 0;
        var numArray = nums.split(",");
        //newArray = numArray.map(parseInt);
        for (var i = 0; i < numArray.length; i++) {
            var item = parseInt(numArray[i]);
            sum += item;
        }   
        return sum;
  }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1')
expected = 1

console.log('Testing adding 1 number')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1,2')
expected = 3

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')
