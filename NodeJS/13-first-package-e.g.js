const underScore = require('lodash')

const items = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]

const newsItems = underScore.flattenDeep(items)
console.log(newsItems)
