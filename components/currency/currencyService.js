const detectCurrency = (currency) => {
  const _cLength = currency.toString().length
  let numberArray = []
  let ten = 1, round = 0
  for(let i = _cLength; i > 0; i--) {
    ten = numberTen(i)
    round = Math.round(currency/ten)
    currency %= ten
    numberArray.push({ num: round, zero: ten })
  }
  // tách các con số có cùng cách đếm ra
  // vd: 10000000000 và 2000000000 có cùng kiểu đếm là tỷ => mười tỷ + hai tỷ => mười hai tỷ
    
}

const currencyString = () => {
  const donvi = [
    {'9':'chín'},
    {'8':'tám'},
    {'7':'bảy'},
    {'6':'sáu'},
    {'5':'năm'},
    {'4':'bốn'},
    {'3':'ba'},
    {'2':'hai'},
    {'1':'một'},
    {'0':'không'},
  ]
}

const currencyToString = (currency) => {

}

const numberTen = (num) => {
  let ten = '1'
  for(let i = 1; i < num; i++) {
    ten += '0'
  }
  return parseInt(ten)
}

module.exports = {
  currencyToString
}