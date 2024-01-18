import * as crypto from "crypto";

export default class ConsistentHashRing {
    private servers: string[];
    private replicaCount: number;
    private hashToServer: { [key: number]: string };
    private hashRing: number[];

    constructor(servers: string[], replicaCount: number = 3) {
        this.servers = servers;
        this.replicaCount = replicaCount;
        this.hashToServer = {};
        this.hashRing = [];

        // Initialize the hash ring
        this.servers.forEach((server) => {
            this.addServer(server);
        });
    }

    addServer(server: string): void {
        for (let i = 0; i < this.replicaCount; i++) {
            const serverHash = this.getHashKey(`${server}-${i}`);
            this.hashToServer[serverHash] = server;
            this.hashRing.push(serverHash);
        }

        // Sort the hashes to maintain the order
        this.hashRing.sort((a, b) => a - b);
    }

    removeServer(server: string): void {
        for (let i = 0; i < this.replicaCount; i++) {
            const serverHash = this.getHashKey(`${server}-${i}`);
            delete this.hashToServer[serverHash];
            const index = this.hashRing.indexOf(serverHash);
            if (index !== -1) {
                this.hashRing.splice(index, 1);
            }
        }
    }

    getServer(key: string): string | null {
        if (Object.keys(this.hashToServer).length === 0) {
            return null;
        }

        const keyHash = this.getHashKey(key);

        // Find the closest server in the ring
        for (const serverHash of this.hashRing) {
            if (keyHash <= serverHash) {
                return this.hashToServer[serverHash];
            }
        }

        // If the key is greater than all keys in the ring, return the first server
        return this.hashToServer[this.hashRing[0]];
    }

    private getHashKey(key: string): number {
        return parseInt(crypto.createHash("md5").update(key).digest("hex"), 16);
    }
}
