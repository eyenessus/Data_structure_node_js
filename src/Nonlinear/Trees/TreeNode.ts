import NodeM from "../../Structure/Node/NodeM";

class TreeNode {
    data:any;
    children:TreeNode[];

    constructor(data:any){
        this.data = data;
        this.children =[]
      }
      addChild(child:NodeM|any) {
        if (child instanceof TreeNode) {
          this.children.push(child);
        } else {
          this.children.push(new TreeNode(child));
        }
      }
};