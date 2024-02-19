import lcs from "../../../src/09_dynamic_programming/classic_problems/LongestCommonSubsequenceDP";

test("linear search array", function () {
    let X = "ABCBDAB";
    let Y = "BDCABA";
    expect(lcs(X, Y)).toEqual("BCBA");

    X = "123456789";
    Y = "123";
    expect(lcs(X, Y)).toEqual("123");

    X = "123456789";
    Y = "231451781";
    expect(lcs(X, Y)).toEqual("234578");
});
