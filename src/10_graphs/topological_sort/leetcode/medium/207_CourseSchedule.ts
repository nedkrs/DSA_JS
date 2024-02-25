// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi]
// indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1.
// So it is impossible.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

// Medium: https://leetcode.com/problems/course-schedule/description/

export default function CourseSchedule(
    numCourses: number,
    prerequisites: number[][],
) {
    if (numCourses <= 1) return true;

    let in_order = new Array(numCourses).fill(0);
    let to: { [key: number]: number[] } = {};

    for (let i = 0; i < prerequisites.length; i++) {
        let course = prerequisites[i][0];
        in_order[course] += prerequisites[i].length - 1;

        for (let j = 0; j < prerequisites[i].length; j++) {
            let parent = prerequisites[i][j];
            if (!to[parent]) to[parent] = [];
            to[parent].push(course);
        }
    }

    let queue: number[] = [];

    for (let i = 0; i < in_order.length; i++) {
        if (in_order[i] === 0) {
            queue.push(i);
        }
    }

    if (queue.length <= 0) return false;

    let ts = 0;

    while (queue.length > 0) {
        let curr = queue.pop() as number;
        let next = to[curr] || [];

        for (let i = 0; i < next.length; i++) {
            in_order[next[i]]--;

            if (in_order[next[i]] === 0) {
                queue.push(next[i]);
            }
        }

        ts++;
    }

    return ts == numCourses;
}
