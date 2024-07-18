//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.



let ages=[ 3, 9, 23, 64, 2, 8, 28, 93]
console.log(`first element in the array=${ages[ages.length-ages.length]}`);
console.log(`last element in the array=${ages[ages.length-1]}`);
console.log(`Programmatically the difference of the first element in the array from the last element of the array=${ages[ages.length-1]-ages[ages.length-ages.length]}`)
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(78);
console.log(`Programmatically the difference of the first element in the array from the last element of the array=${ages[ages.length-1]-ages[ages.length-ages.length]}`)
//Use a loop to iterate through the array and calculate the average age.

let avg=0;
for (let index = 0; index < ages.length; index++) {
    avg = (avg + ages[index]);   

}

console.log(`Average age=${avg/ages.length}`)

//Use a loop to iterate through the array and calculate the average number of letters per name.

let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let avgletters=0;
names.forEach(element => {     
    avgletters=(avgletters+element.length);
});
console.log(`the average number of letters per name=${avgletters/names.length}`);



//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log(`concatenate all the names together, separated by spaces:`);
names.forEach(element => {
   
    console.log( names.join(" "));
});

//How do you access the last element of any array?

console.log(`last Element=${names[names.length-1]}`);

//How do you access the first element of any array?

console.log(`first Element=${names[length-length]}`);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
//and add the length of each name to the nameLengths array.

let nameLengths=[];
names.forEach(element => {
    nameLengths.push(element.length);
    
});

console.log(`new array nameLengths=${nameLengths}`);


//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum=0;
nameLengths.forEach(element => {
    sum=sum+element;
});


console.log(` the sum of all the elements in the array nameLengths=${sum}`);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatenatedWords(word,n){
let i=1;
let wordArray=[];
do {
   wordArray.push(word);
    i++;
} while (i<=n);
  
console.log(wordArray.join(''));

}
concatenatedWords("Hello",5);

let newWord=(word,n)=>{
let i=1;let wordArray=[];
do {
    wordArray.push(word);
    i++;
} while (i<=n);
  return wordArray;
//console.log(wordArray.join(''));
}
console.log(newWord("Hello",5).join(''));
/*
let wordArray1=[];
 wordArray1=(word,n)=>{
    do {
        wordArray1.push(word);
         i++;
     } while (i<=n);
}

console.log(wordArray1("hello",5).join(''));
*/


//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.
let fullName=(firstName,lastName)=> {
    return (`Full Name is: ${firstName}${lastName}`);
}
console.log(fullName("Jyoti"," Parashar"));

function returnSum(numArray) {
    let sum=0;
    for (let index = 0; index < numArray.length; index++) {
        sum+= numArray[index];        
    }

    let istrue= (sum>100)? true:false;
    return istrue;
}
let a=returnSum([34,56,67,78]);
console.log(`Sum is ${a}`);

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

let arrayavg=(x)=>{
    let sum=0;
    for (let index = 0; index < x.length; index++) {
        sum+= x[index];        
    }
   return sum/x.length;
}

console.log(`Average is ${arrayavg([5,5])}`);

//Write a function that takes two arrays of numbers and 
//returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareArrayAvg(arr1,arr2){
    let sum1=0;
    let sum2=0;
    let istrue1=false
    for (let index = 0; index < arr1.length; index++) {
        sum1+= arr1[index];      
    }
    for (let index = 0; index < arr2.length; index++) {
        sum2+= arr2[index];      
    }
   // console.log(sum1/arr1.length);
    //console.log(sum2/arr2.length);
    if( (sum1/arr1.length)>((sum2/arr2.length))) {
        istrue1=true;
    }
    return istrue1;
}

console.log(`result is ${compareArrayAvg([5,5],[41,41])}`);

//Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside && moneyInPocket>10.50) {
        return true;
    }else
    {
        return false;
    }
}

console.log(`result is ${willBuyDrink(true,12.5)}`);

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function printFabonacci(n) {
    let az=[];
    for (let index = 0; index < n; index++) {
        if (index===0) {
            az.push(index);
        }else if(index===1){
            az.push(index);
        }   else{
            //const element = index-1+index-2;
            const element=az[index-1]+az[index-2]
            az.push(element)
        }
       
    }
    return az;
}

console.log(printFabonacci(15));