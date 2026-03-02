const arr = ['a','b','a','c','b','a'];

const count = arr.reduce((acc, curr)=>{
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count);

