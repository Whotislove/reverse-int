module.exports = function reverse (n) {
let arr = n.toString().split('').reverse().join('')
  return Number(arr)
}
}

