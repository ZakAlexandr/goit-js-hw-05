//task-03
"use strict";

class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(items) {
        this.items.push(items);
        return this.items;
    }
    removeItem(items) {
        this.items.splice(this.items.indexOf(items), 1);
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]