class student
{
    setDetails(sid, sname,grade)
    // {
    //     this.sid=101;
    //     this.sname="John"
    //     this.grade="A";
    // }
    // or
    {
        this.sid=sid;
        this.sname=sname;
        this.grade-grade;

    }
    
    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

// create an object    
let stu=new student();
stu.setDetails(101,"Ez","A");  //101 John A
stu.display();
