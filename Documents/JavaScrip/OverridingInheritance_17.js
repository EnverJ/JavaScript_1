// overriding   recreate the same method(parent class) in child class

class Bank
{
    roi()
    {
        return 0;
    }
}

class AXIS extends Bank
{
    roi()
    {
        return 10.0;
    }
}

class SBI extends Bank
{
    roi()
    {
        return 12.8;
    }
}

sbi=new SBI();
console.log(sbi.roi()); 
ax=new AXIS();
console.log(ax.roi());