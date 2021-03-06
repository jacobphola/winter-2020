class StringCalculator {
  Add(nums) {
      if (nums == '') {
          return 0
      }
      else
      {
          var numArr = nums.split(',')
          let sum = 0
          for (var number in numArr)
          {
              sum += Number(number)
          }
          return sum
      }
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
