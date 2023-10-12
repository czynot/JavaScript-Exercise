function map(arr, mapFunc) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    finalArr.push(result);
  }
  return finalArr;
}

let arr = [1, 2, 3, 4, 5];
squareArr = arr.map((num) => num ** 2);
console.log(squareArr);
const squareArr2 = map(arr, (num) => num ** 2);
console.log(squareArr2);
