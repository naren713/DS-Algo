function countDistinct(array) {
    distinct = []
    rep = []
    for (var i = 0; i < array.length; i++) {
        if (!distinct.includes(array[i])) {
            distinct.push(array[i])
        } else {
            rep.push(array[i])
        }
    }
    if (rep.length == 0) {
        return "All Distinct Elements"
    }
    return distinct
}
console.log(countDistinct([26, 32, 45, 11, 7, 45]))