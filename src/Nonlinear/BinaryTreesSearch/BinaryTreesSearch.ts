import NodeM from "../../Structure/Node/NodeM";

export class BinaryTreeSearch {
    value: number;
    depth: number;
    left: BinaryTreeSearch | null;
    right: BinaryTreeSearch | null;

    constructor(value: number, depth: number = 1) {
        this.value = value
        this.depth = depth
        this.left = null
        this.right = null
    }
    insert(value: number) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BinaryTreeSearch(value, this.depth + 1);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BinaryTreeSearch(value, this.depth + 1);
            } else {
                this.right.insert(value);
            }
        }
    }
    getNodeByValue(value:number) :any{
        if (this.value === value) {
            return this;
        } else if ((this.left) && (value < this.value)) {
            return this.left.getNodeByValue(value);
        } else if (this.right) {
            return this.right.getNodeByValue(value);
        }
        return null;

    }
};
