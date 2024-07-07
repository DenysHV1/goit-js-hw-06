class Storage {
	constructor(items) {
		this.items = items;
	}

	getItems() {
		return this.items;
	}

	addItem(newItem) {
		this.items.push(newItem);
	}

	removeItem(itemToRemove) {
		const inx = this.items.findIndex(item => item === itemToRemove);
		console.log(inx);
		if (inx > -1) {
			this.items.splice(inx, 1);
		}
	}
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
