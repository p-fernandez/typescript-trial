function totalLengthWithUnion(x: (string | any[]), y: (string | any[])) : number {
  const total: number = x.length + y.length;
  return total;
}

const res = totalLengthWithUnion([1, 2, 3], 'mnemonic');
console.log(res);
