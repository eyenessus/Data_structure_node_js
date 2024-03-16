import HashMap from "../Structure/HashMap/HashMap";


const employees = new HashMap(3);
employees.assign('34-567', 'Mara');
console.log(employees.hashmap);


const glossary = new HashMap(3);
glossary.assign('semordnilap', 'Words that form different words when reversed');
console.log(glossary.retrieve('semordnilap'));