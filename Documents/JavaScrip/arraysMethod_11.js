let fruits=["Orange","Banana","Apple","Mango"];

// toString & join()
console.log(fruits.toString());
console.log(fruits.join());
// sperate the value
console.log(fruits.join("*"));

// pop will remove the last element

fruits=["Orange","Banana","Apple","Mango"];
fruits.pop();
console.log(fruits.pop());
console.log(fruits);

// push  add new element to the end
fruits=["Orange","Banana","Apple","Mango"];
console.log(fruits.push("Kiwi"));  // return length
console.log(fruits);

// shift()   remove the first array elelnt and shift all other elements to lower index
fruits=["Orange","Banana","Apple","Mango"];
console.log(fruits.shift());
console.log(fruits);

//unshift   add new element at the begining
fruits=["Orange","Banana","Apple","Mango"];
//fruits.unshift("lemon");
console.log(fruits.unshift("lemon"));

// delete elements from array
fruits=["Orange","Banana","Apple","Mango"];
delete fruits[1];
console.log(fruits);

// concat()---concotinate, join/merging 2 or more arays
let arr1=[10,20];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));

let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice()  slcile elemets from an array
fruits=["Orange","Banana","Apple","Mango","lemon"];
console.log(fruits.slice(1));  //[ 'Banana', 'Apple', 'Mango', 'lemon' ]
console.log(fruits.slice(2));   //[ 'Apple', 'Mango', 'lemon' ]


// sort()   
fruits=["Orange","Banana","Apple","Mango","lemon"];
console.log(fruits.sort());    //[ 'Apple', 'Banana', 'Mango', 'Orange', 'lemon' ]

let nums=[34,56,456,902];
console.log(nums.sort());  //[ 34, 456, 56, 902 ]

// reverse()
fruits=["Orange","Banana","Apple","Mango","lemon"];
console.log("Original arraya element "+fruits)
fruits.reverse();
console.log("after reversing elements of fruits array are "+fruits);



