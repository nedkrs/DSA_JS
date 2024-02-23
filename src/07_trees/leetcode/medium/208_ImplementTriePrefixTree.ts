// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys
// in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before),
// and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously
// inserted string word that has the prefix prefix, and false otherwise.

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]
// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

// Medium: https://leetcode.com/problems/implement-trie-prefix-tree/description/

export class TrieNode {
    children: TrieNode[];
    isEndOfWord: boolean;
    numOfWordsAfter: number;

    constructor() {
        this.children = [];
        this.isEndOfWord = false;
        this.numOfWordsAfter = 0;
    }
}

export default class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        this.insertRecursively(word, 0, this.root);
    }

    private insertRecursively(
        word: string,
        idx: number,
        node: TrieNode,
    ): boolean {
        let letter = word[idx].charCodeAt(0) - "a".charCodeAt(0);

        if (!node.children[letter]) {
            node.children[letter] = new TrieNode();
        }
        if (idx + 1 === word.length) {
            if (node.children[letter].isEndOfWord) {
                return false;
            } else {
                node.children[letter].isEndOfWord = true;
                return true;
            }
        }
        if (this.insertRecursively(word, idx + 1, node.children[letter])) {
            node.children[letter].numOfWordsAfter++;
            return true;
        }
        return false;
    }

    search(word: string): boolean {
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let letter = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if (!curr.children[letter]) {
                return false;
            }
            if (i + 1 === word.length && curr.children[letter].isEndOfWord) {
                return true;
            }

            curr = curr.children[letter];
        }

        return false;
    }

    startsWith(prefix: string): boolean {
        let curr = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let letter = prefix[i].charCodeAt(0) - "a".charCodeAt(0);
            if (!curr.children[letter]) {
                return false;
            }
            if (i + 1 === prefix.length) {
                return (
                    curr.children[letter].isEndOfWord ||
                    curr.children[letter].numOfWordsAfter > 0
                );
            }

            curr = curr.children[letter];
        }
        return false;
    }

    delete(word: string): void {
        this.deleteRecursively(word, 0, this.root);
    }

    private deleteRecursively(
        word: string,
        idx: number,
        node: TrieNode,
    ): boolean {
        let letter = word[idx].charCodeAt(0) - "a".charCodeAt(0);

        if (!node.children[letter]) {
            return false;
        }
        if (idx + 1 === word.length && node.children[letter].isEndOfWord) {
            node.children[letter].isEndOfWord = false;
            return true;
        }
        if (this.deleteRecursively(word, idx + 1, node.children[letter])) {
            node.children[letter].numOfWordsAfter--;
            return true;
        }
        return false;
    }

    find(prefix: string): string[] {
        let out: string[] = [];
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let letter = prefix[i].charCodeAt(0) - "a".charCodeAt(0);
            if (!curr.children[letter]) {
                return [];
            }
            curr = curr.children[letter];
        }
        if (curr.numOfWordsAfter <= 0) return [];
        this.findRecursively(prefix, curr, out);
        return out;
    }

    private findRecursively(word: string, node: TrieNode, out: string[]): void {
        if (node.isEndOfWord) out.push(word);
        if (node.numOfWordsAfter <= 0) return;

        for (let i = 0; i < node.children.length; i++) {
            const next = node.children[i];

            if (!next) continue;
            let letter = String.fromCharCode(i + "a".charCodeAt(0));
            this.findRecursively(word + letter, next, out);
        }
    }
}
