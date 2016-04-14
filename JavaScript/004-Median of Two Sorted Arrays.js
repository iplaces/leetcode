/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var result;
    var length = nums1.length + nums2.length;
    if(length % 2 === 0) {
        result = findTheKth(nums1, 0, nums2, 0, length/2, 1); //flag===1
    } else {
        result = findTheKth(nums1, 0, nums2, 0, Math.ceil(length/2), 0);   //flag===0
    }
    return result;
};

function findTheKth(arrayA, startA, arrayB, startB, k, flag) {
    if(startA >= arrayA.length) {
        return (arrayB[startB + k - 1] + arrayB[startB + k - 1 + flag]) / 2;
    }
    if(startB >= arrayB.length) {
        return (arrayA[startA + k - 1] + arrayA[startA + k - 1 + flag]) / 2;
    }

    if(k === 1 && flag === 0) {
        return Math.min(arrayA[startA], arrayB[startB]);
    } 
    if(k === 1 && flag === 1) {
        if(startA + 1 < arrayA.length && arrayA[startA+1] < arrayB[startB]) {
            return (arrayA[startA] + arrayA[startA+1]) / 2;
        } else if(startB + 1 < arrayB.length && arrayB[startB+1] < arrayA[startA]){
            return (arrayB[startB] + arrayB[startB+1]) / 2;
        } else {
            return (arrayA[startA] + arrayB[startB]) / 2;
        }
    }
    
    var index = Math.floor(k / 2);
    var lengthA = arrayA.length;
    var lengthB = arrayB.length;
    var keyA = startA + index - 1 < lengthA?arrayA[startA+index-1] : arrayA[lengthA-1]; 
    var keyB = startB + index - 1 < lengthB?arrayB[startB+index-1] : arrayB[lengthB-1];

    if(keyA < keyB) {
        if(startA + index - 1 < lengthA) {
            return findTheKth(arrayA, startA + index, arrayB, startB, k - index, flag);
        } else {
            return findTheKth(arrayA, startA + index, arrayB, startB, k - lengthA, flag);
        }
        
    } else {
        if(startB + index - 1 < lengthB) {
            return findTheKth(arrayA, startA, arrayB, startB + index, k - index, flag);
        } else {
            return findTheKth(arrayA, startA, arrayB, startB + index, k - lengthB, flag);
        }
        
    }
} 