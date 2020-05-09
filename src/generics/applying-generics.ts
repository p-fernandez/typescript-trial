interface IHaveLength {
  length: number;
}

function sumLength<G extends IHaveLength>(x: G, y: G): number {
  const total: number = x.length + y.length;
  return total;
}

const arr = [1, 2, 3];
const arr2 = [4, 5];
const sum = sumLength(arr, arr2);
console.log(sum);
