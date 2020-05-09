function totalLength(x: string, y:string) : number {
  const total: number = x.length + y.length;
  return total;
}

const result = totalLength('johnny', 'mnemonic');
console.log(result);
