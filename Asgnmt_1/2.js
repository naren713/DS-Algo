function sumOfPalNos(array) {
    var array1 = []
    var result = []
    for (var i = 0; i < array.length; i++) {
        array1.push(array[i].toString())
    }
    for (var j = 0; j < array1.length; j++) {
        if (array1[j].split("").reverse().join("") == array[j]) {
            result.push(array[j])
        }
    }
    if (result.length == 0) {
        return "No Palindrome Numbers"
    } else {
        return Math.max.apply(Math, result)
    }
}


console.log(sumOfPalNos([320, 2121, 343, 87, 321, 858, 987, 126, 547]))