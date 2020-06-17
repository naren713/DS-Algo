function fun(strings) {
    var s = strings.split(" ")
    return s.join("%20")
}

console.log(fun("This is a sentence"))