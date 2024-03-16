import HashMap from "../Structure/HashMap/HashMap";


const employees = new HashMap(3);
employees.assign('34-567', 'Mara');
console.log(employees.hashmap);


const glossary = new HashMap(3);
glossary.assign('semordnilap', 'Words that form different words when reversed');
console.log(glossary.retrieve('semordnilap'));


const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck','Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));
