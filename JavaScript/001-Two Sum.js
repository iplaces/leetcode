/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var array = nums.slice(0);
    
    function compact(v1, v2) {
    	if(v1 < v2) {
    		return -1;
    	} else if(v1 > v2) {
    		return 1;
    	} else {
    		return 0;
    	}
    }
    array = array.sort(compact);
	
	var m=0, n=array.length-1;
	while(m < n) {
	    if(array[m] + array[n] === target) {
	    	var first, second;
	    	if(nums.indexOf(array[m]) > nums.indexOf(array[n])) {
	    		first = nums.indexOf(array[n]);
	    		second = nums.indexOf(array[m]);
	    	} else if(nums.indexOf(array[m]) < nums.indexOf(array[n])) {
	    		first = nums.indexOf(array[m]);
	    		second = nums.indexOf(array[n]);
	    	} else {
	    		first = nums.indexOf(array[m]);
	    		second = nums.indexOf(array[n], first+1);
	    	}
	        
	        result.push(first);
	        result.push(second);
	        
	        
	        break;
	    } else if(array[m] + array[n] > target) {
	    	n--;
	    } else {
	    	m++;
	    }
	}
    return result;
};