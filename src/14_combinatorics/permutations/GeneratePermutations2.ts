function permutationsRecursive(nums: number[], size: number) {
    function helper(i: number, nums: number[]): number[][] {
        if (i === nums.length) {
            return size === 0 ? [[]] : [];
        }

        let resPerms = [];
        let perms = helper(i + 1, nums);
        for (let p of perms) {
            for (let j = 0; j <= p.length; j++) {
                if (p.length < size) {
                    let pCopy = p.slice();
                    pCopy.splice(j, 0, nums[i]);
                    resPerms.push(pCopy);
                }
            }
        }
        return resPerms.filter((perm) => perm.length === size);
    }

    return helper(0, nums);
}

console.log(permutationsRecursive([1, 2, 3], 3));
