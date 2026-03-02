insert(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let current = this.head;
  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
}