import ConsistentHashing from "../src/ConsistentHashing";

describe("ConsistentHashing", function () {
    let ring: ConsistentHashing;
    const servers = ["Server1", "Server2", "Server3"];

    beforeEach(() => {
        ring = new ConsistentHashing(servers, 3);
    });

    test("should consistently hash the same input to the same server", () => {
        const server1 = ring.getServer("my_key");
        const server2 = ring.getServer("my_key");
        expect(server1).toEqual(server2);
    });

    test("should redistribute keys when a server is removed", () => {
        const initialServer = ring.getServer("my_key") as string;
        ring.removeServer(initialServer);
        const newServer = ring.getServer("my_key");
        expect(newServer).not.toEqual(initialServer);
    });

    test("should handle the removal of a non existing server", () => {
        const serverBeforeRemoval = ring.getServer("my_key");
        ring.removeServer("NonExistingServer");
        const serverAfterRemoval = ring.getServer("my_key");
        expect(serverBeforeRemoval).toEqual(serverAfterRemoval);
    });
});
