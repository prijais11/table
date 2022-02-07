function submitValues()
{
    var name= document.getElementById('name').value ;
    var age= document.getElementById('age').value;
    var weight= document.getElementById('weight').value;
    cal(name,age,weight);
}
function cal(name,age,weight)
{
    if(age>=5 && age<=7)
    {
        if(weight<=15 && weight>=20)
        {
            document.getElementById("result").innerHTML="Hello"+name+"!!! Your weight is perfect.";
        }
        else
        if(weight>20)
        {
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is greater than the recommended value of"+weight+" KG at an age of "+age;
        }
        else 
        if(weight<15)
        {
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is less than the recommended value of"+weight+" KG at an age of "+age;
        }
    }
    else
    if(age>=8 && age<=10)
    {
        if(weight<=21 && weight>=25)
        {
            
            document.getElementById("result").innerHTML="Hello"+name+"!!! Your weight is perfect.";
        }
        else
        if(weight>25)
        {
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is greater than the recommended value of"+weight+" KG at an age of "+age;
        }
        else 
        if(weight<21)
        {

            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is less than the recommended value of"+weight+" KG at an age of "+age;
        }
    }
    else
    if(age>=11 && age<=15)
    {
        if(weight<=26 && weight>=30)
        {
            document.getElementById("result").innerHTML="Hello"+name+"!!! Your weight is perfect.";
        }
        else
        if(weight>30)
        {
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is greater than the recommended value of"+weight+" KG at an age of "+age;
        }
        else 
        if(weight<26)
        {
            
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is less than the recommended value of"+weight+" KG at an age of "+age;
        }
    }
    else
    if(age>=16 && age<=20)
    {
        if(weight<=31 && weight>=40)
        {
             
            document.getElementById("result").innerHTML="Hello"+name+"!!! Your weight is perfect.";
        }
        else
        if(weight>40)
        {
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is greater than the recommended value of"+weight+" KG at an age of "+age;
        }
        else 
        if(weight<31)
        {
           
            document.getElementById("result").innerHTML="Hello "+name+"!!! Your weight is less than the recommended value of"+weight+" KG at an age of "+age;
        }
    }
}