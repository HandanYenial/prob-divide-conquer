/**
countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s,
write a function called countZeroes, which returns the number of zeroes
in the array.
Constraints:
Time Complexity: O(log N)
Examples:
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
 */
function countZeroes(arr) {// O(log N)
    let firstZero = findFirst(arr) 
    if (firstZero === -1) return 0;
  
    return arr.length - firstZero
  }
  
  function findFirst(arr, low = 0, high = arr.length - 1) { //find first function accepts array, low and high where low is 0 and high 
                                                            //is the last index of the array
    if (high >= low) { //if high is greater than or equal to low
      let mid = low + Math.floor((high - low) / 2) //mid index is low plus the floor of high minus low divided by 2
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) { //
        return mid; //return mid
      } else if (arr[mid] === 1) { //if the value at mid is 1
        return findFirst(arr, mid + 1, high) //return the findFirst function with the array, mid plus 1 and high
      }
      return findFirst(arr, low, mid - 1) //return the findFirst function with the array, low and mid minus 1
    }
    return -1; //when high is less than low return -1
  }



module.exports = countZeroes