function filterFalsey(arr) {
   return arr.filter(elem => !!elem === true)
}
console.log(filterFalsey(['', 0, null, [], undefined, '0']));

function filterFalsey(arr){
    let truthArr = []
    for (let i = 0; i < arr.length; ++i){
        if (!!arr[i] === true){
            truthArr.push(arr[i])
        }
    }
    return truthArr
}

console.log(filterFalsey(['', 0, null, undefined, '0', 12, []]));