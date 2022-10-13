// wrapping data nadn function into one single unit
class student

{
    constructor()
    {
        let name, marks;

    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
    this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
     this.marks=marks;
    }
}

// create object

let stu=new student();
stu.setName("John");
stu.setMarks("A");
// call the methods
console.log(stu.getName());
console.log(stu.getMarks());