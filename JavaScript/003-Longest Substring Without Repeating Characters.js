/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxNum = 0;
    var start = 1;
    for(var i=0; i<s.length; i++) {
        var num = (s.length === 0)?0: 1;
        if(start === i) {
            start++;
        }                
        var c = s.charAt(start);
        var subs = s.substring(i, start);
        while(subs.indexOf(c) < 0) {
           num = start - i + 1;
           start++;
           c = s.charAt(start);
           subs = s.substring(i, start);
        }
        if(maxNum < num) {
            maxNum = num;
        }
        if(s.length - i - 1 <= maxNum && start >= s.length) break;
    }
    return maxNum;
};