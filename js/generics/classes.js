const array = [1, 2, 3];
const array2 = [1, 2, 3];
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair1 = new KeyValuePair(1, 'First');
const pair2 = new KeyValuePair('Second', new Date(Date.now()));
const pair3 = new KeyValuePair(3, 'Third');
//console.log(pair1, pair2, pair3);
class KeyValuePairPrinter {
    constructor(pairs) {
        this.pairs = pairs;
    }
    print() {
        for (let p of this.pairs) {
            console.log(`${p.key}: ${p.value}`);
        }
    }
}
let printer = new KeyValuePairPrinter([pair1, pair3]);
printer.print();
// complaints for not being the same type
//printer = new KeyValuePairPrinter([pair1, pair2, pair3]);
