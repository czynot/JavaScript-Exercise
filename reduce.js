function reduce(arr, reducer) {
  let final = 0;
  for (let i = 0; i < arr.length; i++) final = reducer(final, arr[i], i, arr);
  return final;
}

let arr = [1, 2, 3, 4];
const sumReducer = (initial, currentValue) => initial + currentValue;
const sum1 = arr.reduce(sumReducer);
console.log(sum1);
const sum2 = reduce(arr, sumReducer);
console.log(sum2);
