const array: number[] = [1, 2, 3];
const array2: Array<number> = [1, 2, 3];

class KeyValuePair<TKey, TValue> {
  constructor(
    public key: TKey,
    public value: TValue,
  ) {}
}

const pair1 = new KeyValuePair<number, string>(1, 'First');
const pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
const pair3 = new KeyValuePair<number, string>(3, 'Third');
//console.log(pair1, pair2, pair3);

class KeyValuePairPrinter<T, U> {
  constructor(private pairs: KeyValuePair<T, U>[]) {}

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
