/*
Iterable groups

Make the Group class from the previous exercise iterable. Refer to the section about the iterator 
interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling 
the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }

  next() {
    if (this.i < this.group.set.length) {
      let result = {value: this.group.set[this.i], done: false};
      this.i++;
      return result;
    }
    return {done: true};
  }
}

class Group {
  constructor() {
    this.set = [];
  }

  add(val) {
    if(!this.set.includes(val)) {
      this.set.push(val);
    }
  }

  delete(val) {
    let index = this.set.indexOf(val);
    if(index != -1) {
      delete this.set[index];
    }
  }

  has(val) {
    return this.set.includes(val);
  }

  static from(obj) {
    let group = new Group();
    for (let val of obj) {
      group.add(val);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}