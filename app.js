function showRating(arr){
    return arr.sort((a, b) => a - b)
}
console.log(showRating([20, 50, 40, 70, 10]))