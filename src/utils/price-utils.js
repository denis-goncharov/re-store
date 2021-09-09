const priceCentFormat = cents => {
  if (cents == null || cents === 0) return "00"
  if (cents < 10) {
    return `0${cents}`
  }
  return cents
}

const priceFormat = price => {
  if (price == null) return "0"
  if (price === Math.floor(price)) return `${price}.00`
  const { dollars, cents } = splitPrice(price)

  return `${dollars}.${priceCentFormat(cents)}`
}

const splitPrice = price => {
  const dollarValue = Math.floor(price)
  const centValue = Math.floor((price - dollarValue) * 100)
  return {
    dollars: dollarValue,
    cents: centValue,
  }
}

const roundNum = num => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export { priceCentFormat, priceFormat, roundNum, splitPrice }
