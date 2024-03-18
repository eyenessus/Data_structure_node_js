import { LinkedList } from "../List/LinkedLists";

const recursiveFactorial = (n:number) :any => {
    if(n === 0){
      return 1
    }
    
    if (n > 0){
      console.log(`Execution context: ${n}`);
      
      return recursiveFactorial(n - 1) * n;
    }
  }
  
  const recursiveSolution = recursiveFactorial(5);

  

  const myList = new LinkedList();

  myList.addToHead('Node 1');
  myList.addToHead('Node 2');
  myList.addToHead('Node 3');
  myList.addToHead('Node 4');

  