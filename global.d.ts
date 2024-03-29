declare type Point = {
    x: number;
    y: number;
};

declare type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
    prev?: ListNode<T>;
};

declare interface List<T> {
    get length(): number;
    removeAt(index: number): T | undefined;
    remove(item: T): T | undefined;
    get(index: number): T | undefined;
    prepend(item: T): void;
    append(item: T): void;
    insertAt(item: T, idx: number): void;
}

declare type CompleteGraphEdge = { from: number; to: number; weight: number };
declare type GraphEdge = { to: number; weight: number; from?: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][];

declare type AdjacencyList = number[][];
declare type AdjacencyMatrix = number[][];

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

declare interface ILRU<K, V> {
    print(): void;
    update(key: K, value: V): void;
    get(key: K): V | undefined;
}
