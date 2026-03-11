function reverseQueue(queue) {
  let stack = [];

  while(queue.length > 0){
    stack.push(queue.shift());
  }

  while(stack.length > 0){
    queue.push(stack.pop());
  }

  return queue;
}

console.log(reverseQueue([1,2,3,4]));