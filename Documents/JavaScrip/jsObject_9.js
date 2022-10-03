 let person=
 {
    firstName:"John",
    lastName:"Jordan",
    age:45,
    weight:167

 }

 //Acees object property
//  console.log(person["firstName"]);
//  console.log(person.lastName);
//  console.log(person["age"]);

// add ne wproperty the existing object
person["heigh"]=5.5;
//person.heigh=5.5;
console.log(person.heigh);

// updte property 
person.weight=167;
console.log(person["weight"]);

//remove the property from the object
delete person.age;
console.log(person.age);

// for in loop
for(let x in person)
{
 //  console.log(x);  // prints only property name
// console.log(person[x]); // print only property value
console.log(x+" "+person[x]);
}



