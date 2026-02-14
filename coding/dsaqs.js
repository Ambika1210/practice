const sorting = (array) => {

  if (array.length === 0) return [];

  for (let a = 0; a < array.length; a++) {
    for (let b = 0; b < array.length - a - 1; b++) {
      if (array[b] > array[b + 1]) {
        let temp = array[b];
        array[b] = array[b + 1];
        array[b + 1] = temp;
      }
    }
  }

let i = 0;
for (let j = 1; j < array.length; j++) {
if (array[i] !== array[j]) {
i++;
array[i] = array[j];
}
}

array.length = i + 1;
return array;
};
console.log(sorting([1,2,3,1])); 
