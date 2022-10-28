function organizeObjects(arr) {
  return arr.sort((a, b) => a.price - b.price);
}
console.log(
  organizeObjects([
    { id: 3, price: 60 },
    { id: 1, price: 50 },
    { id: 2, price: 30 },
  ])
);
