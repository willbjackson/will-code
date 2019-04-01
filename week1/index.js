// variables

var firstName = 'Will';
firstName = 10;

let lastName = 'Jackson'

let fulName = firstName + " " + lastName; // concatenation, add, type coercion
let fullName = `${firstName} ${lastName}` // string interpolation

const middleName = 'danger';
// const middleName = 10;

// challenge pring all types
let favoriteNum = 13;
let nothing = null;
let favoriteArtist = "Taylor Swift";
let positive = true;
let aUndefined =undefined;

console.log(favoriteNum);
console.log(typeof(favoriteNum));
console.log(favoriteArtist);
console.log(typeof(favoriteArtist));console.log(nothing);
console.log(typeof(nothing));console.log(positive);
console.log(typeof(positive));
console.log(typeof(aUndefined));

// functions

function add1(a,b) { //statement functions
    var plus = a + b;
console.log(plus)
}
add1(2,4);

function print2(message) {
    console.log(message)
}

let add = function ( a, b ) { //expression function
    return a + b;
}

function log2 (data) {
    print2(data);
}

print2('hey');

// objects

// object literal 1st way of creating objects
let person = {
    gender: null,
    name: null,
    address: null,
    talk: function (say) {
        console.log(say);
    }
}

// object constructor - a special function that creates objects...uses the word, this. 2nd way of creating objects
function Person () {
    this.gender = null;
    this.name = "the one";
    this.address = null;

    return this;
}
// this - i will create a specific instance of anyone that copies me

// object creator - 3rd way of creating objects
let person5 = Object.create(person);

let person2 = person; //shallow copy
let person3 = new Person();
let person4 = Person();


person.gender = 'male';
person2.gender = 'zoiberg';
person3.gender = 'texan';
person4.gender = "'murican";
person5.gender = "marsian";

console.log(person.gender)
console.log(person2.gender)
console.log(person3.gender)
console.log(person4.gender)
console.log(person5.gender)
console.log(person5.talk('yoooo'));

// prototypal inheritance

let admin = {
    role: 'it'
}

function Admin () {
    this.role = 'it';
    // this.name = 'will';
}

// admin.constructor = Person;
Admin.prototype = Object.create(person);

let fred = Object.create(admin);
let fred2 = new Admin();
let fred3 = new Admin();

// fred2.name = 'sir';
fred3.name = 'UTD';

console.log(fred2.name);
console.log(fred2.role);
console.log(fred3.name);
console.log(fred3.role);

// scopes

// var firstVar = 'at the top';
// let firstVarLet = 'at the top';

// function firstFunc () {
//     var secondVar = 'in the function';
//     let secondVarLet = 'in the function';

//     console.log(firstVar);
//     console.log(secondVar);
//     console.log(firstVarLet);
//     console.log(secondVarLet);
// }

// console.log(firstVar);
// console.log(secondVar);
// console.log(firstVarLet);
// console.log(secondVarLet);

// function scope
// document scope

// falsy = false, 0, '', NaN, null, undefined

// conditionals, loops

if (1 == '1') {
    console.log('second')
}


