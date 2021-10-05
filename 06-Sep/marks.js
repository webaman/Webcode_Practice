var hindi=86;
var eng=63;
var maths=65;
var physics=88;
var chemistry=81;

var sum=hindi+eng+maths+physics+chemistry;
 var total=sum/5;

 if(total<33)
 {
     console.log("Fail")
 }
 else
 if(total>=40 && total <=50)
 {
     console.log("Pass with Grade D " +total)
 }
 else
 if(total>=51 && total<=59)
 {
     console.log("Pass with Grade C " + total)
 }
 if(total>=60 && total<=69)
 {
     console.log("Pass with Grade B " + total)
 }if(total>=70 && total<=79)
 {
     console.log("Pass with Grade B+ " + total)
 }
 if(total>=80 && total<=89)
 {
     console.log("Pass with Grade A " + total)
 }
 else
 if(total >=90)
 {
     console.log("Pass with Grade A+ " + total)
 }