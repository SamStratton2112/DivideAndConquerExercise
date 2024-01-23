function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    // account for index 0 included in total by adding 1
    return lastIdx - firstIdx + 1;
  }
  
//   get first value 
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        // recursive call 
        //  runs same function on right half
        return findFirst(arr, num, mid + 1, high)
      } else {
        //  runs same function on left half
        return findFirst(arr, num, low, mid - 1)
      }
    }
    return -1
  }
  
//   get last value
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }
  

module.exports = sortedFrequency