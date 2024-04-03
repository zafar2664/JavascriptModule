// Arrays: single variable, having multiple values

//let n = "Shashank";

//n = "Abhinandan";

//n =  "Nawab";

//console.log(n);

// IN C, C++, JAVA arrays were homogenous
// IN JS arrays were heterogeneous


// let names = new Array();

//let names = [100, 45, "Rohit", false, 100.6];

//let numbers = [3, 4, 5, 6, 7];

//console.log(numbers[0]);

//console.log(numbers[1] + numbers[0]);  //7

//c//onsole.log(numbers.length); // number of element in the array

//console.log(numbers[2] + numbers[3] + numbers[numbers.length - 1]);

// push, pop, shift, unshift

//let numbers = [3, 4, 5, 6, 7];

// adds values to the end of the array

// numbers.push(8, 9, 10);

// adds values to the beginning of the array

//numbers.unshift(8, 9, 10);

// removes 1 value from the end of the array

// numbers.pop();
//numbers.pop();
//numbers.pop();

//console.log(numbers);

//let numbers = [3, 4, 5, 6, 7];

//console.log(numbers.push(10, 11, 12, 13));

//console.log(numbers.unshift(10, 12, 13));

//console.log(numbers.pop());

//console.log(numbers.shift());

//let a = numbers.pop(); //7

//let b = numbers.unshift(a); //5

//let c = numbers.push(10, 11); //7

//console.log(a + b +c);

// slice
//cuts the array into smaller array: omits the last index
//console.log(numbers.slice(0, 3));

//if single argument is passed, cuts out startingfrom that index and rest of the array

//console.log(numbers.slice(1));

//console.log(numbers.slice(-3, -1));
//console.log(numbers.slice(-2, -6));



//let numbers = [3, 4, 5, 6, 7, 12, 45, 11, 78, 96];

//numbers.splice(startingIndex, deleteCount, elementsToadd);
//numbers.splice(6, 1, 13);
//console.log(numbers);

// [1, 2, 3 ,4, ]


//const names = ["Ram", "shysm", "sheet", "Geeta"];
//names.reverse();
//console.log(names);

//const shaktimaan = ["Gangadhar", "Vidhyadhar", "Shashtri"];
//toString & join: joins together and binds together the values of an array

//console.log(shaktimaan);
//console.log(shaktimaan.toString());

//DELETE

//let numbers = [1, 2, 3, 4];
//console.log(numbers);

//delete numbers[2];
//console.log(numbers);

//a = 70;
//b = 40;

//function modifiedSort(a, b) {
    //if (a > b) {
        //return -1;
    //}
    //else if (b > a){
        //return 1;

    //}
    //else{
       // return 0;
   // }
//}
//numbers.sort(modifiedSort);
//console.log(numbers);

// console.log(a);

// let a = [78, 67, 3, 4];

/*
 1 => ba
 -1 => ab
 0 => original

*/
// function temp(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// a.sort(temp);

// console.log(a);

// Strings
a = "hello 0 343 i am ashsih";
console.log(a);