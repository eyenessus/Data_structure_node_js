export default class HashMap implements IHashMap {
    hashmap: Array<Number>;

    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
    }

    hash(key: string) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    assign(key: string, value: any) {
        const arrayIndex = this.hash(key);
        this.hashmap[arrayIndex] = value;
    }
}