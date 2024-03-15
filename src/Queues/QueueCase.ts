import Queue from "./Queues";

const restaurantOrder = new Queue();
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');
console.log('\nFood preparing...\n')
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log('All orders ready!')