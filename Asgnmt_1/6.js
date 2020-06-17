function Anagrams(str1, str2) {
    result = undefined
    if (str1.length == str2.length) {
        for (i = 0; i < str1.length; i++) {
            if (str1.includes(str2[i])) {
                result = true
            } else {
                result = false
            }

        }
    } else {
        return "Not Anagram"
    }
    return result
}
console.log(Anagrams("spear", "pears"))