/*
 * @lc app=leetcode.cn id=3 lang=typescript
 * @lcpr version=30203
 *
 * [3] 无重复字符的最长子串ss
 */

// @lc code=start
/**
 * 思路：滑动窗口
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * @param s 输入字符串
 * @returns 最长子串长度
 */
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  const n = s.length;
  const set = new Set<string>();
  let maxLen = 0;

  while (right < n) {
    const char = s[right];
    if (!set.has(char)) {
      set.add(char);
      right++;
      maxLen = Math.max(maxLen, right - left);
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return maxLen;
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

export { lengthOfLongestSubstring };
