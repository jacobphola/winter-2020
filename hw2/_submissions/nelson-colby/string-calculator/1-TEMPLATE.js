class StringCalculator {
  Add(nums) {
    let numArray = nums.split(',')
    if (numArray.length > 2) { return "Error: More than 2 numbers found in string."}
    let sum = 0
    for (let number of numArray) {
      sum += Number(number)
    }
    return sum
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
