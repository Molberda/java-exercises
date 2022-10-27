function zero(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr [i] = 0
    }
    return newArr
} 

console.log(zero([1, 2, 3, 4, 5, 67,]));

// function zeroMap(zeroArr) {
//     let zeroArr1 = zeroArr.map(elem => elem * 0)
//     return zeroArr1
// }

// console.log(zeroMap([1,2,3,4,5,6]))
