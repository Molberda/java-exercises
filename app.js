// function boolean(arr){
//     return arr.map(elem => !!elem)
// }

// console.log(boolean([500, 0, 'david','', [], 12, null]))

function boolean(arr){
    let booleanArr = []
    for (let i = 0; i < arr.length; ++i){
        booleanArr.push(!!arr[i])
    }
    return booleanArr
}

console.log(boolean([500, 0, 'david','', [], 12, null]))