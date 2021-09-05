/* Ваша цель в этом ката-реализовать функцию разности, которая вычитает один список из другого и вернет результат.

Он должен удалить из списка все значения a, которые присутствуют в спискеb, сохраняя их порядок.

arrayDiff([1,2],[1]) == [2]
Если значение присутствует в b, все его вхождения должны быть удалены из другого:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

/* function arrayDiff(a, b) {
    let result = a.filter(item, b => item !== b.include())

    return result
}

console.log(arrayDiff([1, 2, 3, 4, 5, 6], [1, 3])) */


/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4];
const s = new Set(arr2);
console.log(s)
console.log(arr1.filter(e => !s.has(e))); */


function arrayDiff(a, b) {
    const s = new Set(b)
    const res = a.filter((e) =>
        !s.has(e)
    )
    return res
}

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([3, 4, 5], [3, 5]))