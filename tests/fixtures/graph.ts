export const list1: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list1[1] = [
    { to: 0, weight: 3 },
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
list1[2] = [
    { to: 1, weight: 4 },
    { to: 3, weight: 7 },
    { to: 0, weight: 1 },
];
list1[3] = [
    { to: 2, weight: 7 },
    { to: 4, weight: 5 },
    { to: 6, weight: 1 },
];
list1[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list1[5] = [
    { to: 6, weight: 1 },
    { to: 4, weight: 2 },
    { to: 2, weight: 18 },
];
list1[6] = [
    { to: 3, weight: 1 },
    { to: 5, weight: 1 },
];

export const list2: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list2[1] = [{ to: 4, weight: 1 }];
list2[2] = [{ to: 3, weight: 7 }];
list2[3] = [];
list2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 1 },
];
list2[6] = [{ to: 3, weight: 1 }];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
];

export const list3: WeightedAdjacencyList = [];

//      (1) --- (4)      (5)
//    /  |       |       /|
// (0)   |       |        |
//       |       |        |
//      (2) --- (3) ---- (6)
list3[0] = [{ to: 1, weight: 3 }];
list3[1] = [
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
list3[2] = [{ to: 3, weight: 7 }];
list3[3] = [{ to: 6, weight: 1 }];
list3[4] = [{ to: 3, weight: 5 }];
list3[5] = [];
list3[6] = [{ to: 5, weight: 1 }];

export const list4: WeightedAdjacencyList = [];

//      (1)
//    /  |
// (0)   |
//    \  |
//      (2) --- (3) ---- (4)
//       |
//       |
//      (5) --- (6)
//       |       |
//       |       |
//      (8) --- (7)
list4[0] = [{ from: 0, to: 1, weight: 1 }];
list4[1] = [
    { from: 1, to: 2, weight: 1 },
    { from: 1, to: 0, weight: 1 },
];
list4[2] = [
    { from: 2, to: 0, weight: 1 },
    { from: 2, to: 1, weight: 1 },
    { from: 2, to: 3, weight: 1 },
    { from: 2, to: 5, weight: 1 },
];
list4[3] = [
    { from: 3, to: 2, weight: 1 },
    { from: 3, to: 4, weight: 1 },
];
list4[4] = [{ from: 4, to: 3, weight: 1 }];
list4[5] = [
    { from: 5, to: 2, weight: 1 },
    { from: 5, to: 6, weight: 1 },
    { from: 5, to: 8, weight: 1 },
];
list4[6] = [
    { from: 6, to: 5, weight: 1 },
    { from: 6, to: 7, weight: 1 },
];
list4[7] = [
    { from: 7, to: 6, weight: 1 },
    { from: 7, to: 8, weight: 1 },
];
list4[8] = [
    { from: 8, to: 5, weight: 1 },
    { from: 8, to: 7, weight: 1 },
];

export const list5: WeightedAdjacencyList = [];
//        E4 -----> A0 <---> 3D
//        ^         ^\
//        |         | +-------+
//        |         |         |
//        v         |         v
//        H7       K10 <----- F5 ---> G6----+
//          \       ^\                ^     |
//           --+    | \               |     |
//             |    |  \         +----+     |
//             |    |   \       /           |
//             v    |    \     /            |
//    B1 ---> I8 ---+     +-> J9 <--- C2 <--+
//
//
// ADKF   GCJ  EH  I  B

list5[0] = [
    { from: 0, to: 3, weight: 1 },
    { from: 0, to: 5, weight: 1 },
];
list5[1] = [{ from: 1, to: 8, weight: 1 }];
list5[2] = [{ from: 2, to: 9, weight: 1 }];
list5[3] = [{ from: 3, to: 0, weight: 1 }];
list5[4] = [
    { from: 4, to: 7, weight: 1 },
    { from: 4, to: 0, weight: 1 },
];
list5[5] = [
    { from: 5, to: 6, weight: 1 },
    { from: 5, to: 10, weight: 1 },
];
list5[6] = [{ from: 6, to: 2, weight: 1 }];
list5[7] = [
    { from: 7, to: 4, weight: 1 },
    { from: 7, to: 8, weight: 1 },
];
list5[8] = [{ from: 8, to: 10, weight: 1 }];
list5[9] = [{ from: 9, to: 6, weight: 1 }];
list5[10] = [
    { from: 10, to: 0, weight: 1 },
    { from: 10, to: 9, weight: 1 },
];

// [
//     A-0, B-1, C-2, D-3, E-4, F-5, G-6, H-7, I-8, J-9, K-10,
//     L-11, M-12, N-13, O-14, P-15, Q-16, R-17, S-18, T-19, U-20,
//     V-21, W-22, X-23, Y-24, Z-25
// ]

export const list6: WeightedAdjacencyList = [];
//
//
//     1-----2-----3
//    /|    / \    |\
//   / |   /   \   | \
//  0  |  8     \  |  4
//   \ | / \     \ | /
//    \|/   \     \|/
//     7-----6-----5
//

list6[0] = [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 7, weight: 8 },
];
list6[1] = [
    { from: 1, to: 0, weight: 4 },
    { from: 1, to: 2, weight: 8 },
    { from: 1, to: 7, weight: 11 },
];
list6[2] = [
    { from: 2, to: 1, weight: 8 },
    { from: 2, to: 3, weight: 7 },
    { from: 2, to: 5, weight: 4 },
    { from: 2, to: 8, weight: 2 },
];
list6[3] = [
    { from: 3, to: 2, weight: 7 },
    { from: 3, to: 4, weight: 9 },
    { from: 3, to: 5, weight: 14 },
];
list6[4] = [
    { from: 4, to: 3, weight: 9 },
    { from: 4, to: 5, weight: 10 },
];
list6[5] = [
    { from: 5, to: 2, weight: 4 },
    { from: 5, to: 3, weight: 14 },
    { from: 5, to: 4, weight: 10 },
    { from: 5, to: 6, weight: 2 },
];
list6[6] = [
    { from: 6, to: 5, weight: 2 },
    { from: 6, to: 7, weight: 1 },
    { from: 6, to: 8, weight: 6 },
];
list6[7] = [
    { from: 7, to: 0, weight: 8 },
    { from: 7, to: 1, weight: 11 },
    { from: 7, to: 6, weight: 1 },
    { from: 7, to: 8, weight: 7 },
];
list6[8] = [
    { from: 8, to: 2, weight: 2 },
    { from: 8, to: 6, weight: 6 },
    { from: 8, to: 7, weight: 7 },
];
