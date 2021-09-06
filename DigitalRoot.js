/* Цифровой корень-это рекурсивная сумма всех цифр в числе.

Учитывая n, возьмем сумму цифр числа n. Если это значение имеет более одной цифры, 
продолжайте уменьшать таким образом, пока не будет получено однозначное число. 
Вход будет неотрицательным целым числом.

Примеры
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */

function digitalRoot(a, results) {
    let b = a.toString().split('').reduce((result, value) => result += parseInt(value), 0)
    console.log(b.toString().length)
    if (b.toString().length !== 1) {
        digitalRoot(b.toString())
    } else {
        this.results = b
    }
    return this.results
}

console.log(digitalRoot(16))


function digital_root(n) {
    return (n - 1) % 9 + 1;
}

console.log(digital_root(16))