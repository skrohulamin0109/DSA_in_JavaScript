const insertionSort = (arr) => {
  const n = arr.length;

  for(let i = 1; i < n; i++){
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && key < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }

}



let array = [23, 2553, 234, 123, 153, 651, 132, 4354, 214, 2424, 456, 265];

insertionSort(array);

console.log(array);
