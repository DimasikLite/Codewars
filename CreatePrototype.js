/* Создание прототипа */


let array = new Array([1, 2, 4, 5, 6])
Array.prototype.getLast = function() {
    return this[0][this[0].length - 1]
}

console.log(array.getLast())