function compareString(a: string, b: string): string {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let substring = '';
      let x = i;
      let y = j;

      while (x < a.length && y < b.length && a[x] === b[y]) {
        substring += a[x];
        x++;
        y++;
      }

      if (substring.length > result.length) {
        result = substring;
      }
    }
  }

  return result;
}

console.log(compareString("AKA", "AKASHI")); 
console.log(compareString("KANGARO", "KANG")); 
console.log(compareString("KI", "KIJANG")); 
console.log(compareString("KUPU-KUPU", "KUPU")); 
console.log(compareString("ILALANG", "ILA")); 
