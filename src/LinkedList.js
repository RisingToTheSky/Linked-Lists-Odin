import { Node } from "./Node";

class LinkedList {
	constructor(head, tail) {
		this.head = head;
		this.tail = tail;
		this.size = 0;
	}

	append(value) {
		let node = new Node(value);
		let current;

		if (this.size === 0) {
			this.head = node;
			this.size++;
		} else {
			current = this.head;
			while (current.nextNode) {
				current = current.nextNode;
			}

			current.nextNode = node;
			this.size++;
		}
	}

	prepend(value) {
		let node = new Node(value);
		let current;

		if (this.size === 0) {
			this.head = node;
			this.size++;
		} else {
			// Set current equal to the old head
			current = this.head;

			// Change the head to the node
			this.head = node;

			// Change the node next to the node to the current
			node.nextNode = current;
			this.size++;
		}
	}

	getSize() {
		return this.size;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		let current = this.head;

		while (current.nextNode) {
			this.tail = current;
			current = current.nextNode;
		}

		return current;
	}

	at(index) {
		let current = this.head;
		let counter = 0;
		// Check if the index is not larger than the size of the linked list - 1.
		if (index > this.getSize() - 1 || index < 0) {
			return null;
		}

		while (current.nextNode) {
			if ((counter === index)) {
				break;
			}
			current = current.nextNode;
			counter++;
		}

		return current;
	}

	pop() {
		let current = this.head;
		let counter = 0;

		if (!current.nextNode && current.value === this.at(this.size - 1).value) {
			current.value = null;
			current = null;
			this.size--;
			return current;
		}

		while (current.nextNode) {
			if (counter === this.size - 2) {
				current.nextNode = null;
				this.size--;
				return current;
			}
			current = current.nextNode;
			counter++;
		}
		
		return current;
	}

	contains(value) {
		let current = this.head;
		while (current.nextNode) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}

		// Check last element in the list
		if (current.value === value) {
			return true;
		}
		
		return false;
	}

	find(value) {
		let index = 0;
		let current = this.head;

		while (current.nextNode) {
			if (current.value === value) {
				return index;
			}
			current = current.nextNode;
			index++;
		}

		if (current.value === value) {
			return index;
		}

		return null;
	}

	toString() {
		let current = this.head;
		let string = '';
		if (current === null) {
			string += ` null `;
			return string;
		}

		string = `( ${current.value} ) -> `;

		while (current.nextNode) {
			string += `( ${current.nextNode.value} ) -> `;
			current = current.nextNode;
		}

		string += `null`;
		
		return string;
	}

}

export {LinkedList};