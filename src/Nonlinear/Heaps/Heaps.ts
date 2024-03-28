export default class MinHeap {
    heap: number[] | null[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
    }
    add(value) {
        console.log(`.. adding ${value}`);
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
        console.log(`added ${value} to heap`, this.heap);
      }

    bubbleUp() {
        let current = this.size;
        while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
          console.log('..', this.heap);
          console.log(`.. swap index ${current} with ${getParent(current)}`);
          this.swap(current, getParent(current));
          current = getParent(current);
        }
      }
    
      swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
      }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;
