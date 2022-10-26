let arr = [1, 2, 6 ,4 ,5]
let sum = 0
function arrAddition(arr) {
    for (let i = 0; i < arr.length; ++i){
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrAddition(arr));
