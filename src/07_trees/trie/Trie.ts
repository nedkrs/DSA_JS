class TrieNode {
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
