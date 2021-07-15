// *********** ES6 *****************

// ******* var let const


var b;
var name = "ghous";
var name = "ahmed"

function abc(){
    var a = "ghous";
    console.log(a);
}

abc();

if(false){
    var b = "hello";
}

function abc(){
    var c;
}

for(var i = 0; i< 5; i++){
    var d = "hello world";
}

console.log(d)

const a = {name: "ghous"};

// a = "ahmed";

a.name = "ahmed";

console.log(a.name)


let b = "hello";





const b = "hello";

b = "world"

// let c = "hello"

console.log(b)




// ******* Object Destructuring



let obj = {
    name: "ghous",
    email: "ghous@gmail.com",
    phone: 3585544545,
    school: 'saylani',
    detail: {
        timing: "09:00 to 11:00",
        day: "TTS"
    }
}

let { phone, email, school, detail } = obj;

let { timing, day } = obj.detail;

console.log(day)

console.log(obj.email)
console.log(obj.phone)
console.log(obj.school)
console.log(obj.name)

// ******* Array Destructuring

let arr = ["ghous", "ahmed", "nadir", "umair"];

console.log(arr[0])

let [a, b, c, d] = arr;

console.log(d)


// ******* Spread Operator Array

let arr1 = ['ghous','ahmed'];
let arr2 = ['nadir','umair'];

let arr3 = [...arr1,...arr2];

console.log(arr3)

// ******* Spread Operator Object


let obj1 = {
    name: "ghous",
    email: "ghous@gmail.com"
}

let obj2 = {
    phone: 311212255,
    school: "Saylani"
}

let obj3 = {...obj1,...obj2};

console.log(obj3)

let obj1 = {
    name: "ghous",
    email: "ghous@gmail.com",
    phone: 311212255,
    school: "Saylani"
}

let obj2 = {
    ...obj1,
    name: "ahmed"
}

console.log(obj2)


// ********* Template Strings

let firstName = "Ghous";
let lastName = "Ahmed";

console.log(firstName + " " + lastName)

console.log(`My name is ${firstName} ${lastName}`)

let list = document.getElementById("list");
for(var i = 0; i < 10; i++){
    let todo = "helloooooo"
    let li = `<li>${todo} <button>DELETE</button><button>EDIT</button></li>`
    list.innerHTML += li
}




// ********* Default + Rest + Spread

function foo(a,...names){
    console.log(names)
  
}

foo("ghous","umair")