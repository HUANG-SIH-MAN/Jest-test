// 12. Integer to Roman
const romanSymbol = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
}

function changeIntegerToRoman (integer) {
  let romanNumber = ''
      Object.keys(romanSymbol).forEach(item => {
      while(integer >= romanSymbol[item]) {
        integer -= romanSymbol[item]
        romanNumber += item
      }
  })
  return romanNumber
}

module.exports = changeIntegerToRoman