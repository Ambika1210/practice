function subarraySum(arr, target) {
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum > target) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) return true;
  }

  return false;
}

console.log(subarraySum([1,2,3,7,5], 12));