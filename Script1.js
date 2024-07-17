let ages=[ 3, 9, 23, 64, 2, 8, 28, 93]
console.log(`first element in the array=${ages[ages.length-ages.length]}`);
console.log(`last element in the array=${ages[ages.length-1]}`);
console.log(`Programmatically the difference of the first element in the array from the last element of the array=${ages[ages.length-1]-ages[ages.length-ages.length]}`)
ages.push(78);
console.log(`Programmatically the difference of the first element in the array from the last element of the array=${ages[ages.length-1]-ages[ages.length-ages.length]}`)
let avg=0;
for (let index = 0; index < ages.length; index++) {
    avg = (avg + ages[index])/ages.length;    
}

console.log(`Average age=${avg}`)

let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//Use a loop to iterate through the array and calculate the average number of letters per name.
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    
}

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

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
array.forEach(element => {
    
});