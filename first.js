// const profile={
//    usearname:"omkarmane",
//    isfollow:"true",
//    bio:"my name is omkar mane and complet js language  in 14 days",
//    age:"21",
// };
// console.log("profile");
// // 
// let a="5";
// let b="2";
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);
// console.log("a++ =",a++);
// console.log("a-- =",a--);


// assigment 

// 1)

// let a = 5;
// let b = 6;
// a += 78;
// console.log("a=",a);

// 2)

// let a = 5;
// let b = 6;
// a -= 78;
// console.log("a=",a);

// 3)

// let a = 5;
// let b = 6;
// a /= 78;
// console.log("a=",a);

// 4)

// let a = 5;
// let b = 6;
// a **= 78;
// console.log("a=",a);

// * comparison operation *

// 1) * equal to (==) * 

// let a =10;
// let b =46;
// console.log("a==b",a==b);

//   2) * not equal to (!=) *

// let a =10;
// let b =46;
// console.log("a!=b",a!=b);

// * logical operator *

//  1) * logical AND  && *

// let a = 8;
// let b = 9;
// let conditon1= a<b;
// let conditon2= b===9;
// console.log("condition1 && condition2",conditon1&& conditon2);

//  * asa pan lehu shatoy apn * 

// let  a= 10;
// let b=26;
// console.log("cond1 && cond2 = ",a<b && b===26);

//  2) * logical or || *

//  let a = 10;
//  let b = 29;
//  console.log("cond1 || cond2 =",a===b || b > a);

//  * logical not ! *
// let a = 10;
// let b = 64;
// console.log("!(cond1)",!(a===b));

// * conditional statements *


// *if statements *

// let age = 19;
// if (age =>18){
//     console.log("you can vote");
// }
// if(age <= 18){
//     console.log("you cannot vote");
// }

// EX 2
// let mode = "dark";
// let color;
// if(mode ==="dark"){
//     color = "black";
// }
// if (mode ==="light"){
//     color = "white";
// }
// console.log(color);
 
// * if else statemente *

// let age = 19;
// if (age>=18){
//     console.log("Eligible to vote");
// }
// else{
//     console.log("Cannot Eligible to vote");
// }

// EX 2
 
// * Odd and even *

// let num = 7;
// if (num %2 ===0){
//     console.log(num ,"is even");
// }
// else{
//     console.log(num,"is Odd")
// }

// * else if statemente *

// let mode = "lowest dark";
// let color;
// if(mode ==="dark"){
//     color ="black";
// }
// else if (mode === "lowdark"){
//     color = "Grey";
// }
// else if (mode === "lowest dark"){
//     color = "orange";
// }
// else{
//     color = "white";
// }
// console.log(color);

// * Ternary operation *

// let age = 19;
//   let result = age >= 18 ? "is adult" : "is not adult";
//   console.log(result);

// * promt *

// let name = prompt("what is your name ?")
// console.log(name);

// * practice quations *

// 1) Get user to input a number using promet ("Enter a number:")check if the number is a multiple of 5 or not ?
// Ans =
// let num = prompt("Enter a number:");
// if (num %5 ===0){
//     console.log(num,"is multiple by 5");
// }
// else{
//     console.log(num,"is not multiple by 5")
// }

// 2) write a code which can give grades to student according to their scores;
//   90-100,A
//   70-89,B
//   60-69,C
//   50-59,D
//   0-49,F

// Ans =
// let scores = 50;
// if (scores >=90 && scores <= 100){
//     grade = "A";
// }
//  else if (scores >=70 && scores <= 89){
//     grade = "B";
// }
// else if (scores >=60 && scores <= 69){
//     grade = "C";
// }
// else if (scores >=50 && scores <= 59){
//     grade = "D";
// }
// else if (scores >=0 && scores <= 49){
//     grade = "F";
// }
// console.log("According to your scores,your grade was:",grade);

//  * chapters 3 *

//  * loops *

// loops are used to execute a pice of code again & again 

//  1) * for loop *

// for(let count = 1;count <= 100;count++){
//     console.log("nanasaheb mahadik collage of engineeringn,path ")
// }
//  console.log("loop is complete")

//  * calculate the sum of 1 to 50 * 

// let sum = 0;
// for(let count = 1; count <= 50 ; count ++){
//     sum = sum + count;
// }
// console.log("sum is =",sum);

//  * print om 15 time *

//  for( om = 1;om <= 15;om++ ){
//     console.log("om =",om);
//  }

//  2) * while loop *
// let i = 0;
// while(i<=100){
//     console.log("i=",i);
//     i++;
// }

//3)* infinite loop *
//                   A loops that never ends( dont use this loop in program)

 
// 4) * do -while loop *

// let i = 1;
// do {
//     console.log("i=",i);
//     i++;
// }while(i<=10);  


// * for of loop *

//  let str = "omkarmane";
//  for (let i of str) {
//    console.log("i =",i);
//  }

// *  to chack a length of string *

//  let str = " omkarmane";
// let size = 0;
// for (let i of str){
//   console.log("i =",i);
//   size++;
// }
// console.log("string size =",size); 


// * for in loop *

// let student = {
//     name : "omkar mane",
//     age : 21,
//     collagename:"nanasaheb mahadik collage of engineering,path",
//     cgpa :8.5,
//     ispass:true,
// };
// for(let key in student){
//     console.log(  key ,student[key]);
// }

//  * pratice questions *

// print all even number from 0 to 100 

// for(let num =0;num<=100; num++){
//     if(num%2 ===0){
//         console.log("num =",num);
//     }
// }

// print all odd number from 0 to 100 

//  for(let num = 0; num<=100; num++){
//     if(num%2!==0){
//         console.log("num=",num);
//     }
//  }
// Q2) creat a game wheare you start with any randam game number ask the use to keep quessing the game number until the use enter correct value ? 

// let gameNUM = 96;
// let userNUM = prompt("guess the game number:");
// while(userNUM!=gameNUM){
//     userNUM = prompt("you enter worng number please guess again:");
// }
// console.log("congratulation,you enter the right number");
