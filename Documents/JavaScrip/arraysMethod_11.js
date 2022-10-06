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