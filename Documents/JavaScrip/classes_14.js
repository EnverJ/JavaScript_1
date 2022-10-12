class student
{
    // setDetails(sid,sname,grade)
    // {
    //     this.sid=101;
    //     this.sname="John"
    //     this.grade="A";
    // }
    // or

    
    constructor(sid, sname, grade) {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;

    }
    
    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

// create an object    
let stu=new student(101,"John","C");
// stu.setDetails(101,"Ez","A");  //101 John A
stu.display();

let stu1=new student(102,"Joah","C");
stu1.display();
let stu2=new student(103,"Joy","C");
stu2.display();

