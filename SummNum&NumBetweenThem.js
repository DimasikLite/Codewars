/* Учитывая два целых aчисла и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните aили b.

Примечание: a и b не заказываются!

Примеры
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2 */



function getSum(a, b) {
    let result = 0
    if (a == b) {
        result = a

    } else if (a > b) {
        for (i = a; i > (b - 1); i--) {
            result += i

        }
    } else if (a < b) {
        for (i = a; i < (b + 1); i++) {
            result += i

        }
    }

    return result
}

console.log(getSum(-1, 6))


const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}