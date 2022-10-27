function removeApples(food) {
    return food.filter(elem => elem !== 'apple')
}

console.log(removeApples(["banana", "apple", "orange", "apple"]));
