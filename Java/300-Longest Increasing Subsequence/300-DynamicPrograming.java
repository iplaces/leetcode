public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums.length <= 1) return nums.length;

        int[] dp = new int[nums.length];
        int max = 0;
        for (int i=0, len=nums.length; i<len; i++) {
            dp[i] = 1;
            for (int j=0; j<i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            max = Math.max(max, dp[i]);
        }

        return max;
    }
}
