/*console.log('Hello World..');

var name='Paramjit Singh';
console.log(name);

var lastName='Sethi';
console.log(lastName);

var age=23;
console.log(age);

var fullAge=true;
console.log(fullAge);
*/

//Mutation means following the sequence of statements by Javascript..

/*var age = 30;
var name = 'Paramjit Singh';
var job = 'teacher';

console.log(name + age); //Type Coercion -> Javascript knows how to concatenate...

console.log(name+ ' is a ' + job + 'Is he married?' + isMarried + '.');

name = 'Daljit Singh';
job = 'Hardware Engineer';


var isMarried = 'true'; //Camel Casing....

console.log(name+ ' is a ' + job + 'Is he married?' + isMarried + '.');

var lastName = prompt("What is your LastName?"); //Used for Input the value in a Variable..
console.log(lastName);

alert('Thanks for answering...!!');
*/

//Operators in Javascript..

/*var now = 2018;
var age = prompt('Hey! Enter your age');

var yearOfBirth = now - age;
console.log('Your year of Birth is '+yearOfBirth);

*/

/*var isMarried = true;

if(isMarried)
{
    console.log('Already Married');
}
else{
    console.log('Want to Marry');
}

if(23=='23')
{
console.log('Something gets executed');
}
*/

//Expressions and Statments

var x= 5+4; //It's an expression

//It's also an expression...
var res = function fun(par)
{
    //code;
}
 //It's a code...
function fun1()
{

}

//Arrays
var names = ['Paramjit Singh',1989,'Teacher'];
console.log(names);

var marks = new Array(45,78,30);
console.log(marks);

console.log(names[0]);

names.push('Daljit singh'); //Push an Item at the end of an array.
names.unshift('Mr.'); //Insert an item at the beginning of an array.

console.log(names);
 names.pop('Daljit Singh'); //Pop an item from the end...
 names.shift('Mr.'); //Remove an item from the beginning..
 
 console.log(names);

 if(names.indexOf('Teacher')==-1)
 {
     console.log('Teacher not exist');

 }
 else
 {
     console.log('Teacher exists..!!');
 }





