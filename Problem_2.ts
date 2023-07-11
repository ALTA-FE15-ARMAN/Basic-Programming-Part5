function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]): string[] {
    const gabungArray = [...arrayA, ...arrayB];
    const hasilArray = Array.from(new Set(gabungArray));
    return hasilArray;
  }
  
  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])); 
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
  