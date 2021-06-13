const _service = require('../currency/currencyService')

const _currencyNumberToCurrencyString = (currency) => {
  const _toString = _service.currencyToString(currency)
  return _toString
}

module.exports = {
  _currencyNumberToCurrencyString
}