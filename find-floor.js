function findFloor(arr, x) {
    // establish indxs for start and end
    let low = 0;
    let high = arr.length - 1;
    let floor = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            return arr[mid]; // Found exact match, no need to search further
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Update the potential floor and search in the right half
            low = mid + 1;
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return floor;
}

module.exports = findFloor