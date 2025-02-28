"use strict";
// error is because of type thing of "Swal", but still works
// Basic 1
let selector = document.getElementById("result");
let selWrap = document.getElementById("wrapper");
// class Person {
//   name: string;
//   age: number;
//   jobTitle: string;
//     constructor(name: string, age: number, jobTitle: string) {
//       this.name = name;
//       this.age = age;
//       this.jobTitle = jobTitle;
//     }
//     printGreet() {
//       return `Hello there, my name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}`;
//     }  
// }
// const person1 = new Person("Christine", 45, "Web Developer");
// console.log(person1);
// selector.innerHTML = person1.printGreet();
// // Basic 2
// class PersonSalary extends Person {
//   salary: number;
//   jobLocation: string;
//     constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
//       super(name, age, jobTitle)
//       this.salary = salary;
//       this.jobLocation = jobLocation;
//     }
//   printSalary() {
//     return `<hr><br>${super.printGreet()}, I get ${this.salary} every month and I work in ${this.jobLocation}.`;
//   }  
// }
// const person2 = new PersonSalary("Christine", 45, "Web Developer", 3000, "San Francisco");
// console.log(person2);
// selector.innerHTML += person2.printSalary();
// Advanced
let allVehicles = [];
class Vehicles {
    constructor(image, brand, year, color, price) {
        this.image = image;
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.price = price;
        allVehicles.push(this);
    }
    printAd() {
        return `<hr><br>Hello there, this car is made by ${this.brand}, it is from ${this.year} and is ${this.color}`;
    }
}
const vehicle1 = new Vehicles("mercedes.jpg", "Mercedes", 1999, "silver", 50000);
const vehicle2 = new Vehicles("audi.jpg", "Audi", 2015, "blue", 5000);
const vehicle3 = new Vehicles("bmw.jpg", "BMW", 2022, "red", 30000);
const vehicle4 = new Vehicles("vw.jpg", "VW", 2019, "black", 10000);
class Motorbikes extends Vehicles {
    constructor(image, brand, year, color, price, seats, fuel) {
        super(image, brand, year, color, price);
        this.seats = seats;
        this.fuel = fuel;
    }
    printAd() {
        return `<hr><br>This bike has ${this.seats} seat(s) and uses ${this.fuel}.`;
    }
}
const moto1 = new Motorbikes("honda.jpg", "Honda", 2018, "green", 3000, 2, "electric power");
const moto2 = new Motorbikes("brixton.jpg", "Brixton", 2021, "black", 2000, 1, "petrol");
class Trucks extends Vehicles {
    constructor(image, brand, year, color, price, hp, bedCover) {
        super(image, brand, year, color, price);
        this.hp = hp;
        this.bedCover = bedCover;
    }
    printAd() {
        let yesno = (this.bedCover == true) ? "yes" : "no"; //short if-statement von Julius
        return `<hr><br>This truck uses ${this.hp} hp, truck bed cover included: ${yesno}.`;
    }
}
const truck1 = new Trucks("dodge.jpg", "Dodge Ram", 2018, "green", 30000, 400, false);
const truck2 = new Trucks("ford.jpg", "Ford F-150", 2021, "black", 20000, 400, true);
// destructuring ------------------------------------------------------
const { brand, hp, bedCover } = truck1;
console.log(brand); // Dodge Ram
console.log(hp); // 400
console.log(bedCover); // false
// destructuring end -----------------------------------------------------
console.log(allVehicles);
for (let val of allVehicles) {
    selWrap.innerHTML += ` 
  <div class="box"><span class="orb">${val.brand}</span></div>
  `;
}
let boxs = document.getElementsByClassName("box");
for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("click", function () {
        boxs[i].style.backgroundColor = "white";
        boxs[i].innerHTML = `
    <div class="card" style="width: 20rem;">
      <img src="./images/${allVehicles[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${allVehicles[i].brand}</h5>
        <p class="card-text">${allVehicles[i].printAd()}</p>
        <a href="#" class="btn btn-primary btnPrice">Price</a>
      </div>
    </div>
    `;
        let buttons = document.getElementsByClassName("btnPrice");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                //console.log(`The price of the vehicle is: € ${allVehicles[i].price}`);
                calcPrice();
            });
        }
    });
    // dummy calculation price
    function calcPrice() {
        let newPrice = (10000000 / (allVehicles[i].year)).toFixed(2); // toFixed() returns a string!!!
        Swal.fire(`The price of the vehicle is: €&nbsp;${newPrice}`);
    }
}
// destructuring an array
const jedi = ['Obi-Wan', 'Yoda'];
const [x, y] = jedi;
console.log(x); // Obi-Wan
console.log(y); // Yoda
// destructuring function parameters
function myFunction(a, b, c = "Obi-Wan") {
    console.log(`${a}, ${b}, ${c}.`);
}
myFunction("Yoda", "Mace Windu"); // Yoda, Mace Windu, Obi-Wan.
myFunction("Yoda", "Mace Windu", "Luke Skywalker"); // Yoda, Mace Windu, Luke Skywalker.
