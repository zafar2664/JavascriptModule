//let a =1;
//let b= 3;
//let sum = a + b;
//console.log(sum);

//let c =4;
//let d = 6;
//let sum1 = c + d;
//console.log(sum1);

//let e =4;
//let f=8;
//let sum2 = e + f;
//console.log(sum2);

// FUNCTION WITH ARGUMENTS

//function sum(a, b) {
    //let s = a + b;
    //console.log(s);
//}

//sum(1, 3);

//sum(4, 6);

//sum(4, 8);

//sum(10); //Not a NumBer

//sum();  //NaN

//FUNCTION WITH ARGUMENT HAVING DEFAULT  VALUE

//function sum(a = 5, b = 6) {
    //let s = a + b;
    //console.log(s);
//}

//sum(10, 20);   // 30

//sum(20);  //26

//sum(); 

//sum(20); 

//FUNCTION WITH RETURNING VALUE

//function sum(a, b, c) {
    //let s = a + b + c;
   // return (s);
//}
//let output = sum(3, 4, 5);
//console.log(output);

// console.log(sum(3, 4, 5));

// FUNCTIONS ARE FIRST CLASS CITIZENS IN JS







function sum(a, b, callback) {
    return callback(a, b);
  }
  
  function product(a, b) {
    return a * b;
  }
  
  console.log(sum(3, 4, product));
