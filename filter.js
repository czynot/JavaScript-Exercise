function filter(arr, filterFunc) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) finalArr.push(arr[i]);
  }
  return finalArr;
}

let arr = [1, 2, 3, 4, 5];
evenArr1 = arr.filter((num) => num % 2 != 0);
console.log(evenArr1);
const evenArr2 = filter(arr, (num) => num % 2 != 0);
console.log(evenArr2);
