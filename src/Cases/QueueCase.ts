import Queue from "../Queues/Queues";

const restaurantOrder = new Queue();
// restaurantOrder.enqueue('apple pie');
// restaurantOrder.enqueue('roast chicken');
// restaurantOrder.enqueue('quinoa salad');
// console.log('\nFood preparing...\n')
// restaurantOrder.dequeue();
// restaurantOrder.dequeue();
// restaurantOrder.dequeue();
// console.log('All orders ready!')

// const boundedQueue = new Queue(3);
// boundedQueue.enqueue(1);
// boundedQueue.enqueue(2);
// boundedQueue.enqueue(3);

// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();


const load = (flights:any) => {
  const runway = new Queue(3);
  flights.forEach((flight:any) => {
    try {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`);
    } catch (e) {
      console.log("Runway full!");
    }
  });
  return runway;
};

const clear = (runway:any) => {
  while (!runway.isEmpty()) {
    const cleared = runway.dequeue();
    console.log("\nFlights wait...\n");
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log("\nAll planes took off, runway clear.");
};


const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567'
];

// Enqueue runway with planes
const departing = load(flights);
// Clear each plane to takeoff
clear(departing);




