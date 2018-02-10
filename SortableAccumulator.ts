export class SortableAccumulator {
  _values: any;
  constructor() {
    this._values = {};
  }
  add(key, value = 1) {
    this._values[key] = this._values[key] ? this._values[key] + value : value;
  }
  sort(isDecending) {
    return Object.keys(this._values)
    .sort((a, b) => {
      if (!isDecending) {
        return this._values[a] - this._values[b];
      } else {
        return this._values[b] - this._values[a];
      }
    })
    .map(val => {
      return {
        value: val,
        occurrences: this._values[val]
      };
    });
  }
  [Symbol.iterator]() {
    // Doesn't work when targeting ES5
    let nextIdx = 0;
    let vals = this._values;
    let keys = Object.keys(this._values);
    return {
      next(){
        return nextIdx < keys.length ?
          {value: vals[keys[nextIdx++]], done: false} :
          {done: true};
      }
    };
  }
};
