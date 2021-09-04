/* Возьмите 2 строки s1 и s2 включите только буквы от a до z. Верните новую отсортированную строку, самую длинную из возможных, содержащую отдельные буквы, 
каждая из которых взята только один раз, из s1 или s2.

Примеры:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
    max = Math.max(s1.split('').length, s2.split('').length)
    let result = []
    let arrays = []
    if (s1.split('').length == max) {
        for (i = 0; i < (s2.length); i++) {
            for (j = 0; j < (s1.length); j++) {
                if (s2[i] === s1[j]) {
                    arrays.push(s1[j])
                }
            }
        }
    } else if (s2.length == max) {
        for (i = 0; i < (s1.length); i++) {
            for (j = 0; j < (s2.length); j++) {
                if (s1[i] === s2[j]) {
                    arrays.push(s2[j])
                }
            }
        }
    }
    arrays = arrays.sort()
    for (i = 0; i < (arrays.length); i++) {
        if (result.indexOf(arrays[i]) == -1 || result.indexOf(arrays[i]) == 'undefined') {
            result.push(arrays[i])
        }

    }
    return result.join('')

}



a = "xyaabbbccccdefwwi"
b = "xxxxyyyyabklmopqi"
console.log(longest(a, b))


function myFilter(array, uslovie) {
    let result = []
    for (i = 0; i < array.length; i++) {
        if (uslovie(array[i])) {
            result.push(array[i])
        }
    }
    return result
}
console.log(myFilter([1, 2, 5, 6, 4, 6], item => item > 5))


















function longest(s1, s2) {
    max = Math.max(s1.split('').length, s2.split('').length)
    let result = []
    let arrays = s1 + s2
    arrays = arrays.split('')

    arrays = arrays.sort()
    for (i = 0; i < (arrays.length); i++) {
        if (result.indexOf(arrays[i]) == -1 || result.indexOf(arrays[i]) == 'undefined') {
            result.push(arrays[i])
        }

    }
    return result.join('')

}



a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a, b))