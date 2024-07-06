console.log("Javascript operations");

let num1=10
let num2=20

console.log(num1+num2)

console.log("What is the final value of x at the end of this code block?");

//var x = 45;
//var y = 16;
//x = x - y;
//console.log(x);
/*
Multiply then Add:
The variables num1 and num2 have already been declared with values.
Calculate the product of num1 and num2
Add 10 to that product
Print that value to the console using console.log()*/

console.log(num1*num2+10)

/*
4. What is the value of z ?


var x = 5;
var y = 6;
x = 3 + y;
var z = x + y;
y = 5 + 2*x;
x = y;

console.log("z=",z);

/***
 * 
 * Subtraction:
The variables num1 and num2 have already been declared with values.
Print the result of subtracting num1 from num2 to the console using console.log()
 * 
 */

num1=10;
num2=-4;

console.log("Subtraction:=",num1-num2);

/*
6. What is the value of z at the end of this code block?

  var x = 35;
  var y = "20";
  var z = x + y;
  console.log("z=",z);

/*
  Division:
Given the variables num1 and num2. Print the quotient of num1 over num2 to the console using console.log()
*/

console.log("quotient=", num2/num1);
/*
8. What is the value of z at the end of this code block?
*/
  var x;
  var y = 38;
  var z = x + y;

 

/* 
  12. What is the value of z ?
*/
  var x = 25;
  var y = 3;
  var z = "Z = " + (x*2);
  console.log("z=",z);


  let firstName;
  let lastName;
  let fullName;
  firstName='Jyoti';
  lastName='Parashar';
  fullName=firstName +" "+ lastName;
  console.log(fullName)



let planeTicket = 120;
let money = 13;
let vacationTime = true;


if (planeTicket > money && vacationTime ){
    console.log(true)
} else {
    console.log(false)
}

money=5;
let costOfSoda=4;

if ( money > costOfSoda  ){
    console.log("I can buy a soda!")
} else {
    console.log("I need to earn some more money!")
}

 num1=23;
 let myNumber=35
 if (num1>myNumber) {
    console.log(num1+"is larger than my number"+myNumber)
 } else if (num1<myNumber) {
    console.log(num1+"is smaller than my number"+ myNumber)
 } else{
    console.log( num1+"is equal to  my number"+ myNumber)
 }


 var numberGrade ;
var letterGrade;

if (numberGrade>90) {
    console.log("A");
    
} else if (numberGrade>80 && numberGrade<89){
    console.log("B");
} else  if (numberGrade>70 && numberGrade<79){
    console.log("C");
} else  if (numberGrade>60 && numberGrade<69){
    console.log("D");
} else  if (numberGrade>0 && numberGrade<59){
    console.log("E");
}


let monthNumber  ;


switch (monthNumber ) {
    case 1:
        console.log("Janurary")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
        case 4:
            console.log("April")
            break;
            case 5:
                console.log("May")
                break;
                case 6: 
                    console.log("June")
                    break;
                  
                    case 7:
                        console.log("July")
                        break;
                        case 8:
                            console.log("August")
                            break;
                            case 9:
                                console.log("September")
                                break;
                                case 10:
                                    console.log("October")
                                    break;
                                    case 11:
                                        console.log("November")
                                        break;
                                        case 12:
                                            console.log("december")
                                            break;
    default:
        console.log("invalid monthh")
        break;
}

var str1 = 'hello';
var str2 = 'Hello';
if  (str1===str2){
   console.log("true")
}
else{
    console.log("false")
}






var a = 2;
var b = 2; 
var c = "2";
/*** DO NOT CHANGE THE CODE ABOVE THIS LINE ***/

// WRITE YOUR CODE HERE

if (a==b) {
    console.log("true");
   
} 
else{
     console.log("flase");
}
if (a==c) {
      console.log("true");
   
} 
else{
     console.log("flase");
}

if(a===c)  {
     
      console.log("true");
   
} 
else{
     console.log("flase");
}

var i;
for (i=3;i<=1;i--) {
  
    console.log(i);
}




let num=1
for(let i=1;i<=10;i++){
    console.log(num + " x " + i +" = ",num*i);
}

let userNumber=5;
do {
    console.log(userNumber)
    userNumber=userNumber+6;
} while (userNumber<=100);


var i = 0;

do{
   if(i % 3 === 0){
      console.log(i);
   }
   i++;
}
while (i <= 99);



/**
 * 
 * Using the supplied variables requiredCupsOfRice and currentCupsOfRice, create a loop of your choice that will add cups of rice to a bowl.
The value of currentCupsOfRice has been declared and initialized to zero (0), and will represent the current number of cups of rice in the bowl.
For every iteration, increment currentCupsOfRice by one to indicate that you have added a cup of rice to the bowl.
Each time a cup of rice is added, print "The bowl contains " + currentCupsOfRice + " cups of rice."
Once the number of cups required has been reached, print "We have enough rice!"
Note: we don't need to know if the bowl is empty.
 


do {
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.")
    currentCupsOfRice++
    if(currentCupsOfRice===requiredCupsOfRice){
        console.log("We have enough rice!")
    }
} while (currentCupsOfRice<=requiredCupsOfRice);
*/

var requiredCupsOfRice = 10;
var currentCupsOfRice = 0;


for (let currentCupsOfRice = 1; currentCupsOfRice <= requiredCupsOfRice; currentCupsOfRice++) {
   
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
    if (currentCupsOfRice===requiredCupsOfRice) {
        console.log("We have enough rice!")
    }
}

do {
    console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice.' );
 } while ( currentCupsOfRice !== requiredCupsOfRice);


 var points = 0;
var pointsReset = false; 
let index;

for ( index = 0; index <= 100; index++ ) {   
   
    if (index%2===0) {
        points=points+5;
        
        console.log("Turns: "+index+" score: "+points)
      
       }
       else{
        points=points+3;
        console.log("Turns: "+index+" score: "+points)

       }
      


   if (points===125) {
   
     points=25;
     pointsReset=true;
 } 
    
     if (index>100 || points>290  ) {
        break;
     }
   
}
/*
    for ( index = 1; index <= 100; index++) {
        if (index%2===0) {
         points=points+5;
        }
        if (index%3===0) {
             points=points+3;
        }
        
         if (points===125) {
            console.log(points)
             points=25;
             pointsReset=true;
         } 
         console.log(points)
         if (index===100 || points===290 ) {
            break;
         }
    }
     

     userNumber=190
     var counter=100

     if (userNumber>=1 && userNumber<=100) {
        while(userNumber<=counter){
            console.log(userNumber)
           userNumber++;
     }}
     else
     {
        console.log("Your number was not between 1 and 100.")
     }
    
        */
