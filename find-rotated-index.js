function findRotatedIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === num) {
            return mid;
        }
        if (arr[low] <= arr[mid]) {
            // Check if the target is within the left half
            if (arr[low] <= num && num < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // Check if the target is within the right half
            if (arr[mid] < num && num <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex