/**Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array.
 * The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
 * If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints

Time Complexity: O(log N)
 */

function findFloor(arr, num){ //accepts an array and a number
    let low = 0; //low is index of 0
    let high = arr.length -1; //high is the last index of the array

    if (low > high){ //if low is greater than high return -1
        return -1;
    }
    if (num >= arr[high]){ //if the given number is greater than the the number in the last index 
        return arr[high]; //then return the number in the last index
    }
    let mid = Math.floor(( low + high )/2); //middle index is first index+lastindex/2
    if (arr[mid] === num){ //if the number in the middle index is equal to the given number
        return arr[mid]; //then return the number in the middle index
    }
    if (mid > 0 && arr[mid-1] < num && num < arr[mid]){ //if the middle index is gretaer than zero, and the number inext to tjhe middle index
        //is less than the given number and the given number is less than the number in the middle index
        return arr[mid-1]; //then return the number in the middle index minus 1
    }
    if ( num < arr[mid]){ //if the given number is less than the number in the middle index
        return findFloor(arr, num, low, mid-1); //then return the findFloor function with the array, number, low, and mid minus 1
    }
    return findFloor(arr,num,mid+1,high); //else return the findFloor function with the array, number, mid plus 1, and high
}

module.exports = findFloor