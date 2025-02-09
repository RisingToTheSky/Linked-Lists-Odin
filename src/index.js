import { LinkedList } from "./LinkedList";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.pop();


console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(-1));
console.log(list.at(4));
console.log(list.at(3));
console.log(list.at(69));

console.log(list.contains("parrot"));
console.log(list.contains("cat"));
console.log(list.contains("turtle"));
console.log(list.contains("hallo"));
console.log(list.find("cat"));
console.log(list.find("turtle"));