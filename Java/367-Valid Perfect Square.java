public class Solution {
    public boolean isPerfectSquare(int num) {
        int start = 1, end = num;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            long mid2 = (long)mid * (long)mid;
            if (mid2 < num) {
                start = mid + 1;
            } else if (mid2 > num) {
                end = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
