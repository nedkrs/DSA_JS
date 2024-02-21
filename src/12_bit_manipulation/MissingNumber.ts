// find the missing number in an array containing n distinct numbers taken from 0 to n

export default function MissingNumber(nums: number[]) {
    let xorSum = 0;
    const numsSize = nums.length;

    for (let i = 0; i < numsSize; i++) {
        xorSum ^= nums[i];
    }

    for (let i = 0; i <= numsSize; i++) {
        xorSum ^= i;
    }

    return xorSum;
}
