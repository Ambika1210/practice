removeNthFromEnd(n) {
  let dummy = new Node(0);
  dummy.next = this.head;

  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  this.head = dummy.next;
}