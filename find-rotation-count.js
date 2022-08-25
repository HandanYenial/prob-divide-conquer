/**findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order.
The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n
Constraints:Time Complexity: O(log N)
Examples:
findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/

function findRotationCount(arr, leftIdx = 0 , rightIdx = arr.length -1) { // accepts an array and a number
    if(rightIdx < leftIdx){ // if the array is empty
        return 0;
    }
    if(rightIdx === leftIdx){ // if the array has one element
        return leftIdx;
    }
    let midIdx = Math.floor((leftIdx + rightIdx)/2); // find the midIdxdle element

    if(midIdx < rightIdx && arr[midIdx] > arr[midIdx+1]){ // if the index of the midIdxdle el is less than the next element
        return midIdx+1; //return the next element's index
    }
    if (midIdx > leftIdx && arr[midIdx] < arr[midIdx-1]){
        return midIdx;
    }
    if(arr[leftIdx] <= arr[midIdx]){
        return findRotationCount(arr,leftIdx, midIdx-1);
    }

    return findRotationCount(arr,midIdx+1, rightIdx);
  
}

module.exports = findRotationCount