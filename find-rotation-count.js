function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        // If the array is already sorted, the rotation count is 0
        if (arr[low] <= arr[high]) {
            return low;
        }
        let mid = Math.floor((low + high) / 2);
        let next = (mid + 1) % arr.length; // Calculate the next idx

        // Check if the mid element is the pivot
        if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
            return mid;
        }

        // If the left half is sorted, search in the right half
        if (arr[low] <= arr[mid]) {
            low = mid + 1;
        } else { // If the right half is sorted, search in the left half
            high = mid - 1;
        }
    }

    return -1; // No rotation found
}

module.exports = findRotationCount