/* Проверьте, имеет ли строка одинаковое количество " x " и "o". Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

Примеры ввода/вывода:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


function XO(str) {
    let result
    let array
    if (str.length > 0) {
        array = str.toLowerCase().split('').reduce((results, value) => {
            if (!!results.hasOwnProperty(value)) {
                ++results[value]
            } else {
                results[value] = 1
            }
            return results
        }, {})

        if (!!array.x || !!array.o) {
            result = (array.x === array.o)
        } else { result = false }
    } else {
        return result = true
    }
    return result
}


function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO("ooxx")) // => true
console.log(XO("xooxx")) // => false
console.log(XO("ooxXm")) // => true
console.log(XO("zpzpzpp")) // => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")) // => false