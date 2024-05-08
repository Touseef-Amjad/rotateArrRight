function rotateArray(arr) {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;

  return arr;
}

console.log(rotateArray([3, 8, 9, 7, 6]));
console.log(rotateArray([1, 2, 3, 4, 5]));
