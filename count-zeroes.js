function countZeroes(arr) {
    // find the first 0 and use that index to get total zeros 
    let firstZero = findFirst(arr)
    if (firstZero === -1){
        return 0;
    }
    return arr.length - firstZero
}

function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
    // we add the indx's and divide by 2 to get middle idx
      let mid = low + Math.floor((high - low) / 2)
    //   if the middleIdx === 0 aka the first number or the one next to the middleIdx === 1 AND the value of the middle idx === 0, then the mid idx is the first 0 
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        // return idx position 
        return mid;
        // if the value of the middleIdx === 1 then run the function again with mid + 1 as the low 
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, high)
      }
    //   if the value of the middleIdx === 0 then run the function again with mid + -1 as the high 
      return findFirst(arr, low, mid - 1)
    }
    return -1;
  }

module.exports = countZeroes