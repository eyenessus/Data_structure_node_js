class HashMap implements IHashMap{
    private hashmap: Array<Number>;

    constructor(size=0){
        this.hashmap = new Array(size)
        .fill(null)
    }
    hash(key:string) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
          hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode;
      }

}