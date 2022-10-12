class Test
{
    static a=10;
    b=20;
    static m1()
    {
        console.log("This is m1 static method ...");
    }

    m2()
    {
        console.log("this is m2 Non-static method....");
    }

    
}
// 1. staic
console.log(Test.a);  //10
Test.a=1000;
console.log(Test.a);
console.log(Test.b);   //undefined
Test.m1();  //This is m1 static method ...
// Test.m2();  //TypeError: Test.m2 is not a function
// 2. access non-static method and variable using object
let t=new Test();
console.log(t.b);  //20
t.m2();  //this is m2 Non-static method....
