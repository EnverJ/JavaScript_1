// js arrays are used to store multiple values in a single variable
// an arary is special variable

 let cars=["tesla","toyota","volvo"];    
// or
// let cars= new Array("tesla","toyota","volvo");

 console.log(cars);

 console.log(cars[2]); //accessing elements

cars[0]="honda";   //change the value
console.log(cars);

// variable og different types
let myarray=[100, "welcome",10.15,true];
console.log(myarray);

// objects in array

let person1={
            name:"John",
            age:30

            };
            
let person2={
                name:"David",
                age:40
    
            };
let objArray=[person1,person2];
console.log(objArray);
console.log(objArray[0]);

let fruits=["mango","lemon","apple","banana"];
console.log(fruits.length);

// looping elemnt form array
for(let i=0;i<=fruits.length-1;i++)
{
    console.log(fruits[i]);
}
console.log("++++++++++++++++++++=");
//for of loop
for(ele of fruits)
{
console.log(ele);
}

console.log("+++++++type of++++++++ ");

console.log(typeof fruits);

console.log(Array.isArray(fruits));



