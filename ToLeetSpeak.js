/* Ваша задача - написать функцию toLeetSpeak, которая преобразует обычное английское предложение в литспик.

Подробнее о литспике Вы можете прочитать в вики -> >https://en.wikipedia.org/wiki/Leet

Учитывайте только прописные буквы (никаких строчных букв, никаких цифр), пробелов нет.

Например:

toLeetSpeak("LEET") returns "1337" */

const code = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2'
}

function toLeetSpeak(str) {
    let output = ''
    for (i in str) {
        if (code[str[i]] == null) {
            output += ' '
        } else {
            output += code[str[i]]
            console.log(output, i)
        }
    }
    return output
}


var word = 'LEFT WORD'

console.log(toLeetSpeak(word))