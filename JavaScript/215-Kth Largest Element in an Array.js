/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var array = nums;
    var result = "";
    function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	function maxHeap(array, index, heapSize) {
		var maxNum = index, 
				leftChild = index * 2 + 1, 
				rightChild = (index + 1) * 2;
		if(leftChild < heapSize && array[maxNum] < array[leftChild]) {
			maxNum = leftChild;
		}
		if(rightChild < heapSize && array[maxNum] < array[rightChild]) {
			maxNum = rightChild;
		}
		if(maxNum != index) {
			swap(array, maxNum, index);
			maxHeap(array, maxNum, heapSize);
		}

	}

	function maxHeapBuild(array) {
		var parent = Math.floor((array.length - 1) / 2);
		for(var i=parent; i>=0; i--) {
			maxHeap(array, i, array.length);
		}
	}

    var n = 1;
	maxHeapBuild(array);
    
	for(var i=array.length-1; i>=0; i--) {
		if(n === k) {
	        result = array[0];
	        break;   
		} else {
    		swap(array, 0, i);
    		maxHeap(array, 0, i);
    		n++;
		}
	}
	return result;
};

