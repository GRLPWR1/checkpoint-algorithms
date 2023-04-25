// Код для первого задания напиши в этой функции
let tree = [
    [
        [["П", "р"], "и"],
        ["в", ["е", "т"]],
    ],
    [["и", "к"], "и"],
];

function crawlTree(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            result += crawlTree(arr[i]);
        } else {
            result += arr[i];
        }
    }
    return result;
}

console.log(crawlTree(tree))

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    let indeces = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] == target) {
                indeces.push(i, j);
                return indeces;                
            }
        }
    }
}

console.log(twoSum([3,7,5,2], 9))

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
