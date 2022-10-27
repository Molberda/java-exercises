function removeApples(food){
    let noApples = []
    for (let i = 0; i < food.length; ++i){
        if (food[i] !== "apple"){
            noApples.push(food[i])
        }
    }
    return noApples
}

console.log(removeApples(["banana", "apple", "orange", "apple"]))


// function removeApples(food) {
//     let noApples = food.filter((elem) => {
//     if (elem !== "apple") {
//         return true
//     }
//   });
// }

// console.log(removeApples("banana", "apple", "orange", "apple"));
