/* У книготорговца есть множество книг, классифицированных по 26 категориям с надписями A, B, ... Z. Каждая книга имеет код cиз 3, 4, 5 или более символов. 1-й символ кода-это заглавная буква, которая определяет категорию книги.

В списке запасов книготорговца за каждым кодом cследует пробел и положительное целое число n (int n >= 0), которое указывает количество книг с этим кодом на складе.

Например, выписка из биржевого списка может быть:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
Вам будет предоставлен список акций (например : L) и список категорий , написанных заглавными буквами, например :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
и ваша задача-найти все книги L с кодами , относящимися к каждой категории M, и суммировать их количество в соответствии с каждой категорией.

Для списков L и M, например, вы должны вернуть строку (в Haskell/Clojure/Racket список пар):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
где A, B, C, W - категории, 20-сумма уникальной книги категории A, 114-сумма , соответствующая "BKWRK" и "BTSQZ", 50 - "CDXEF" и 0-категории "W", так как нет кода, начинающегося с W.

Если L или M пусты, возвращаемая строка равна ""(вместо этого Clojure и Racket должны возвращать пустой массив/список).

Примечание:
В результате коды и их значения расположены в том же порядке, что и в M. */


function stockList(listOfArt, listOfCat) {
    console.log(listOfArt, listOfCat)

    const output = {}
    let outputVal = ''
    for (j in listOfCat) {
        output[listOfCat[j]] = 0
        for (i in listOfArt) {

            if (listOfArt[i].indexOf(listOfCat[j]) !== -1 && listOfArt[i].indexOf(listOfCat[j]) < 1) {
                output[listOfCat[j]] = output[listOfCat[j]] + parseInt(listOfArt[i].match(/\d+/))
            }
        }
    }

    for (item in output) {
        outputVal += '(' + item + ' : ' + output[item] + ') - '
    }
    return outputVal.slice(0, outputVal.length - 3)
}

console.log(stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']))

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c))

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c))