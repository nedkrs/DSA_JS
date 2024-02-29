export default function LongestConsecutiveSequence(nums: number[]) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}
