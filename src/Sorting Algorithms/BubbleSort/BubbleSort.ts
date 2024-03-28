
const bubbleSort = (input:number[]) => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

console.log(bubbleSort([9, 8, 888, 6, 2, 4, 997, 2, 1]))

module.exports = bubbleSort;

const swap = (arr:number[], indexOne:number, indexTwo:number) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  };
  
  module.exports = swap;
  