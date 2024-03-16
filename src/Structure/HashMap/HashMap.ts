class HashMap implements IHashMap{
    private hashmap: Array<Number>;
    constructor(size=0){
        this.hashmap = new Array(size)
        .fill(null)
    }
    
}