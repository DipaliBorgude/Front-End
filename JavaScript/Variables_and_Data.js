/*var name='Harshal ';          
console.log(name);

var companyName="Crisil";         //  String Data Type//
var employeeNumber=100199;       // Number Data Type//

var isWorking=true;             // Boolean Data Type
console.log(isWorking);

var car;                         // Undefined Data Type
console.log(car);

car="HyundaiI20";
console.log(car);

//Type Coercion//
console.log( name +  ' ' + employeeNumber);     //Type coeracion


var homeName,  homeAddress;

homeName='Borgude Niwas ';
homeAddress=true;

console.log(homeName + 'is a Farm house. Near Borgude Farm in Pune ' + homeAddress);

//Type coeracion//




           //  Dynamic features //
employeeNumber='One hundread and eighty';
console.log(employeeNumber) ;

companyName='TCS';
console.log(companyName);

         //    Development Tools//

alert(companyName);

var experiance  =   prompt('how many years do you have experiance?');
console.log(name + ' has ' + experiance + ' years experiance');

var age  = prompt('how many years old are you?');
console.log(name  + 'is ' + age + ' years old.');
*/
 
                                //   Basic Operator//
//var totalDistance,distanceHarshal,distanceDipali;
//var totalDistance=40;

//distanceHarshal = totalDistance -15;
//console.log(distanceHarshal);
//distanceDipali = totalDistance -25;
//console.log(distanceDipali);

//console.log(distanceDipali * distanceHarshal);
//console.log(distanceHarshal / distanceDipali);

                          //     Logical Operators//
//var isNear = distanceHarshal < distanceDipali;
//console.log(isNear);

//var isFar = distanceHarshal > distanceDipali;
//console.log(isFar);


                                        //CONDITIONAL STATEMENT//
//Example 1:
//var grade;
//grade=45;

//if ( grade < 35 ) {
//console.log('You can not go to the next standard.');}
//else if (grade >= 35 && grade < 40){
//console.log('you can nt go to the next standard but you can enter in the the exam.');}
//else{
  //  console.log('you can go to the next standard.');}


//Example 2:
//var age;
//age=25;

//if(age < 18)
//{ console.log('He/she can not the enter the cafe.');}
//else if (age >= 18 && age <  23 )
//{ console.log('He/she can entered the cafe but cannot drink alcohole.');}
//else
//{console.log('He/she can enter the cafe also drink alcohole.');}


                                                //TERNERY OPERATOR//

/*var grade = 40;

 1.    grade < 45 
       ? console.log('You can not go to the next class.') 
       : console.log('You can go to the next class.')

 2.    var result = grade > 45 ? 'Pass' : 'Fail' ;
       console.log(result); */

                                                //SWITCH STATEMENT//

/* var day;
day = 'Saturday';

switch(day){
    case'Friday':
      console.log('I like friday.');
         break;
    case'Saturday':
     console.log('I am on holiday.');
         break;
    case'Monday':
      console.log('I dont like mondays');
         break;
    default :
      console.log('I dont know the day.');
          break;
} */

//Example 2:
//var age;
//age=25;

//if(age < 18)
//{ console.log('He/she can not the enter the cafe.');}
//else if (age >= 18 && age <  23 )
//{ console.log('He/she can entered the cafe but cannot drink alcohole.');}
//else
//{console.log('He/she can enter the cafe also drink alcohole.');}

//In Switch statement type//

/*var age;
age = '20';

switch (true){
  case (age < 18) :
    console.log('He/She can not enter the cafe.');
     break;

  case (age >= 18 && age < 23 ) :
    console.log('He/she can entered the cafe but cant drink alcohol.');
     break;

  default:
    console.log('He/She can enter the cafe also drink alcohol.');
     break;
} */

  //CODE QUIZ 2

  /*var alexaGrade = (90 + 80 + 95) / 3;
  var saraGrade  = (89 + 76 + 98) / 3;
  var nancyGrade = (42 + 98 + 83) / 3;

  console.log('Average Score of Alexa.' , alexaGrade);
  console.log('Average Score of Sara' , saraGrade);
  console.log('Avrage Score of Nancy' , nancyGrade);

if (alexaGrade > saraGrade && alexaGrade > nancyGrade) {
  console.log('Alexa has the highest Score', alexaGrade);
}else if(saraGrade > alexaGrade && saraGrade > nancyGrade){
  console.log('Sara has the highest score', saraGrade);
}else if(nancyGrade > alexaGrade && nancyGrade > saraGrade){
  console.log('Nancy has the highest score', nancyGrade);
}else{
  console.log('Averages may be the same.');
}  */
  
/////////////////////////////////         LOOPS(Repeatative situation)         /////////////////////////////////////


//////  WHILE LOOPS ///////

/*  Example 1:
var number=1;

while (number < 11) {
  console.log(number);
  number++   //number = number + 1

} */

/* Example 2:
   Infinite loops:    it will crash the system if we doesnt provide it break condition which also know as false condition.

 var number=1;

 while (number < 11){
 console.log(number);
 }
*/

//Example 3:

/* var number=132;

while (number <=  148){
  console.log(number);
  number += 2
}    */

//Example 4:

/* var number=25;

while( number <= 100 ){
  if (number % 7 === 0){
  console.log(number);
  }
  number ++;
}  */


/////////////////////////////                  FOR LOOPS                 /////////////////////////////////////////////////////////

 

// Example no.1:  Print number from 1 to 10.

/* for (var number = 1; number < 11;  number++){
  console.log(number);
}  */


//  Example No.2:Print odd no bet 132 to 148 into console.

/* for (var number = 132; number <= 148; number++ ){
     if(number % 2  != 0)
     {
      console.log(number);
     }
}    */


//   Example No.3:Print no bet 25 and 100,that divide by 7 and 5 both to the console.

 /* for (var number = 25; number <= 100; number++) {
      if ( ( number % 5  === 0 ) && ( number % 7 ===0)) {
        console.log(number);
      }
      } */


//////////////////////////////////       CONTINUE AND BREAK STATEMENT        ///////////////////////////////////////////////



//Print no bet 1 to 11 that divisle by 2 to the console.

/* console.log('Continue Statement');

for (var i = 1; i <= 11; i++){
  if(i % 2  !==0 ) continue;
  {
    console.log(i);
  }
} */

// Print first even no bet 1 to 11 to the console.

/*console.log('Break Statement');

for (var i=1; i <= 11; i++){
  if (i % 2 ===0){
    console.log(i);
    break;
  }
} */

////////////////////////////////           FUNCTION          ///////////////////////////////////////////////
 
//////////////////   FUNCTION DECLERATION   ///////////////////

//Example 1.

/* function sayHello() {
  console.log('Hello World!');
}

sayHello(); */


///Example 2.

 /* function plzComment(){
  console.log("Yes" && "No");
  console.log('Yes' && 'Yes');
  console.log('No' && 'No')
}

plzComment(); 
plzComment(); 
plzComment();  */



/////////////////////////            FUNCTION WITH ARGUMENT           /////////////////////////////////////

//Example 1:

/* function sayHi(name) {
  console.log('Hi' + '  ' + name);
}

sayHi('Dipali'); */


//Example 2:

/* function Score (number){
  console.log(number * number * number);
}

Score(35); */

//Example 3:
/* function bmi(length , weigth){
  console.log(weigth / (length*length));
}
bmi(1.85 , 56); */




///////////////////////////////         FUNCTION RETURN KEYWORD          //////////////////////////////////////////////

//Example 1:

/* function cube(number){
  return (number * number * number);
}

console.log(cube(20)); */

//Example 2:

/* function bmi(weigth,length){
  return (weigth / (length * length));
}
var diet = bmi(57 , 190);                       ///return function save the output value generated from function into the diet var.//

console.log(diet); */

//Example 3:

/* function score(marks){
  if(marks <= 37) {return;}
  return( marks + marks + marks);
}
 var sheet = score(45);

 console.log(sheet); */

//Example 4:

/* function age(age){
 { if(age < 18)
  return('You can not the enter');
}
return('You can enter the cafe');
}

var cafe = age(15);

console.log(cafe); */

//Example 5:

/* function calculateAge(birthdate){
  return 2023 - birthdate;
}

var Age = calculateAge(1997);

console.log('My age is ' +  Age); */

////////////////////////        FUNCTION DECLARATION AND EXPRESSION          ///////////////////////////////////////

///////////////////Function with DECLARATION :

/* function calculateAge(birthyear){
  return 2023 - birthyear;
}

var age = calculateAge(1997);

console.log(age); */

////////////////////Function EXPRESSION :

/* var calculateAge = function (birthyear){
  return 2023 - birthyear ;
}

var Age = calculateAge(1997);
console.log('My Age is ' + Age)  ;

calculateAge = 'Dipali ';
console.log(calculateAge);

var Age = calculateAge(1994);
console.log(Age);  */        //////////////// after using calculateAge as string we cannt use it as function again.  ////





//////////////////////////                CODE QUIZ                 ///////////////////////////////////////////

 ////    Example 1 :

 /* function subtraction(X , Y){
  return (X) - (Y);
 }

 var result = subtraction(50 , 100);
 console.log(result); */

 ////    Example 2 :
  
 /* function isOdd(number){
 { if ( number % 2 != 0)
  return('Odd Number Yes')};
  return('Odd Number No')
 }

 var Number = isOdd(13);
 console.log(Number); */

 ////    Example 3 :

/*  var addition = function (number){
  var res = 0;
  for (var i = 1 ; i <= number; i++){
    res = res + i;
  }
  return res;
 }
 console.log(addition(5)); */


 ///////////////////////////////////      FUNCTION SCOPE     ////////////////////////////////////////////////////////////////

 // LEXICAL SCOPE 

 /*function name() {

  function hi(){
                                                     function inside this can access in the above function which is know as Parent function.

  }
 } */

 // Example of diff FUNCTION:

// Example 1:

 /* function hiSay(){
  var Name = "Dipali";
  console.log(Name);
 }

 hiSay();
 console.log(Name); */                          // in this line,we call variable from outside the function,it got error 
                                              //  ,so we can not call variable which is inside the function from outside.

//Example 2:
 /* var count = 30;
 console.log(count); */                   //Example of GLOBAL SCOPE.

 //Example 3:
  
 /* var count = 30;
 console.log(count);

 function sayHi(){

  console.log(count);   ////this is inside scope,in this we call the variable which is outside from inside the function.

 }

 sayHi(); */