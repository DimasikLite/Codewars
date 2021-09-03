/* Реализуйте функцию, которая складывает два числа вместе и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после добавления.

Возвращаемое двоичное число должно быть строкой.

Примеры:

add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary) */


function addBinary(a, b) {
    sum = a + b
    return sum.toString(2)
}

console.log(addBinary(10, 241))