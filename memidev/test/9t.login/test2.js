var wordList = [
    'babo', 'out', 'orange', 'hello'
]

var input = 'hello'
var last_one = input[input.length - 1]
var result = wordList.filter((word) => {
    return last_one === word[0]
})

console.log(result)