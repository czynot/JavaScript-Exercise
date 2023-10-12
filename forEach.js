function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}

let values = [1, 2, 3, 4, 5];
values.forEach(function (val) {
  console.log(val);
});
forEach(values, function (val) {
  console.log(val);
});
