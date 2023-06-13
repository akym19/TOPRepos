let user = {
    name : "John",
    age : 30,
    height : 186,
    address : "Muntinlupa",
};
// user.name = "John";
// user.age = 30;
// user.height = 186
// user.address = "Muntinlupa"

// let key = 'likes birds'

// user[key] = true;

// let fruit = 'apple'

// let bag = {
//     [fruit] : 5
// }

// function makeUser(name, age) {
//     return {
//         name, //same as name:name,
//         age, //same as age:age,
//     }
// }

// let user = makeUser("John", 30)

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  const person2 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() { //shorthand syntax for methods (object's functions)
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() { //shorthand syntax for methods (object's functions)
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  const person3 = {
    name: { //here we create another object for the name property in the first object
      first: "Bob",
      last: "Smith",
    },
    // …
  };

person3.name.first; //this is the way to access properties of objects nested inside an object. 'chain' them

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

  
const raffy = createPerson('raffy')
const myka = createPerson('myka')