public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums.length <= 1) return nums.length;

        int[] search = new int[nums.length + 1];
        int max = 1;

        search[1] = nums[0];
        for (int i=1, len=nums.length; i<len; i++) {
            int index = binarySearch(search, nums[i], max);
            search[index] = nums[i];
            if (index > max) max = index;
        }

        return max;
    }

    private int binarySearch(int[] nums, int target, int len) {
        int start = 1, end = len;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] < target) {
                start = mid + 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                return mid;
            }
        }

        return start;
    }
}
