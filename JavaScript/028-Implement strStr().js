/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/* 使用KMP算法解决字符串查找问题 */
var strStr = function(haystack, needle) {
    // needle长度为0时返回0
    const nLen = needle.length;
    if (nLen === 0) {
        return 0;
    }

    // needle长度不为0时进行查找
    const next = GetNextVal(needle), // 求解next数组
          hLen=haystack.length;
    let hPos = 0,   // 文本串匹配位置
        nPos = 0;   // 模式串匹配位置
    while(hPos < hLen && nPos < nLen) {

        // 如果模式串匹配位置为-1，或者文本串和模式串对应位置字符相同，hPos和nPos各自加一
        if (nPos === -1 || haystack[hPos] === needle[nPos]) {
            hPos++;
            nPos++;
        } else { // 如果不符合前者情况移动模式串
            nPos = next[nPos];
        }
    }

    // 如果最后nPos等于nLen，说明匹配成功，返回匹配成功的字符串在文本串中的初始位置
    if (nPos === nLen) {
        return hPos - nPos;
    } else {  //  匹配失败返回-1
        return -1;
    }
};

// next数组求解函数
function GetNextVal(modal) {
    const next = [-1];
    let k = -1,
        j = 0;

    while (j < modal.length - 1) {

        // modal[k]表示前缀，modal[j]表示后缀
        if (k === -1 || modal[j] === modal[k]) {
            k++;
            j++;

            // next数组优化，避免出现modal[k]等于modal[next[k]]从而出现无意义的匹配
            if (modal[k] !== modal[j]) {
                next[j] = k;
            } else {  
                next[j] = next[k];
            }
        } else {
            k = next[k]
        }
    }

    return next;
}
