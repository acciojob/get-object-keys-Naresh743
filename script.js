//your JS code here. If required.
// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional tests
const studentWithMoreProps = {
  name: "John",
  age: 25,
  city: "New York"
};

console.log(getKeys(studentWithMoreProps)); // Output: ["name", "age", "city"]

const studentWithOneProp = {
  name: "Jane"
};

console.log(getKeys(studentWithOneProp)); // Output: ["name"]
