function Alternate(array) {
    var even = []
    var odd = []
    var result = []
    var count = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            odd.push(array[i])
        } else {
            even.push(array[i])
        }
    }
    even.sort(function(a, b) {
        return a - b;
    });
    odd.sort(function(a, b) {
        return a - b;
    });
    for (var j = 0; j < array.length; j++) {
        result.push(odd[j])
        result.push(even[j])
    }
    result = result.filter(function(item) {
        return item !== undefined;
    });
    return result
}

console.log(Alternate([1, 32, 7, 11, 12, 13, 15, 18, 21]))