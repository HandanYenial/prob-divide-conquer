/**sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts
the occurrences of the number in the array
Constraints:Time Complexity: O(log N)
Examples:
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function sortedFrequency(arr,num) { //accepts an array and a numue
    let firstIndex  = findFirst(arr,num); //firstIndex is the findFirst function with the array and numue
    if (firstIndex === -1) return firstIndex; //if firstIndex is -1 return -1
    let lastIndex = findLast(arr,num); //lastIndex is the findLast function with the array and numue
    return lastIndex - firstIndex + 1; //return lastIndex minus firstIndex plus 1

}

function findFirst(arr,num,leftIdx=0 , rightIdx = arr.length-1){
    if(rightIdx >= leftIdx){
        let midIdx = Math.floor((leftIdx+rightIdx)/2)
        if((midIdx === 0 || arr[midIdx - 1]) && arr[midIdx] === num){
            return midIdx;
        } else if(num > arr[midIdx]){
            return findFirst(arr, num, midIdx+1, rightIdx)
        } else {
            return findFirst(arr, num, leftIdx, midIdx - 1)
        }
    }
    return -1;
    }

    function findLast(arr, num, leftIdx=0 , rightIdx = arr.length-1){
        if(rightIdx >= leftIdx){
            let midIdx = Math.floor((leftIdx + rightIdx)/2)
            if ((midIdx == arr.length -1 || num < arr[midIdx+1]) && arr[midIdx] === num){
                return midIdx;
            } else if (num < arr[midIdx]){
                return findLast(arr,num,leftIdx,midIdx-1)
            } else {
                return findLast(arr,num,midIdx+1,rightIdx)
            }
        }
        return -1;
    }

module.exports = sortedFrequency