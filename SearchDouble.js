/* Посчитайте количество дубликатов
Напишите функцию, которая вернет количество различных буквенных символов без учета регистра и числовых цифр, которые встречаются более одного раза во входной строке. Можно предположить, что входная строка содержит только алфавиты (как прописные, так и строчные) и цифровые цифры.

Пример
"abcde" -> 0 ># no characters repeats more than once
"aabbcde" -> 2 ># 'a' and 'b'
"aabBcde" -> 2 ># 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 ># 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text) {
    text = text.toLowerCase().split('').reduce(function(result, value) {
        if (!!result.hasOwnProperty(value)) {
            ++result[value]
        } else {
            result[value] = 1
        }
        return result
    }, {})
    text = Object.values(text)
    text = parseInt(text.filter(item => item > 1).length)
    return text
}


console.log(duplicateCount('tex'))


function duplicateCount(text) {
    return text.toLowerCase().split('').filter(function(val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}