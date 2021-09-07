/* Добро пожаловать.

В этом ката от вас требуется, учитывая строку, заменить каждую букву ее положением в алфавите.

Если что-то в тексте не является письмом, игнорируйте его и не возвращайте.

"a" = 1, "b" = 2, и т.д.

Пример
alphabetPosition("The sunset sets at twelve o' clock.")
Должен вернуться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки) */


function alphabetPosition(text) {
    text = Array.from(text.toLowerCase()).filter(item => item.match(/^[a-zA-Z]/)).map(e => e.charCodeAt(0) - 96)
    return text.join(' ');
}
console.log(alphabetPosition('The sunset sets at twelve o clock'))