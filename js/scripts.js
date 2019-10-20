// function Mary(mtu) {
//         console.log('Hi' + ' ' + mtu.lastname + ' ' + 'do you live in' + ' ' + mtu.address.street + ' ' + 'or somewhere else' + '?');
// }

// function Charles(mtu) {

//         console.log('Hi' + ' ' + mtu.lastname + ' ' + 'do you live in' + ' ' + mtu.address.street + ' ' + '?');
// }

// Charles({
//         firstname: 'Mary',
//         lastname: 'Jane',
//         address: {
//                 street: 'nyubustreet',
//                 city: 'Daressalaam',
//         }
// });

// Mary({
//         firstname: 'Charles',
//         lastname: 'Mtawali',
//         address: {
//                 street: 'nyubustreet',
//                 city: 'Daressalaam'
//         }
// });

// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };

// employee.getWage();

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }

// const circle = createCircle(1);
// circle.draw();

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);

// const keys = Object.keys(circle);
// console.log(keys);

// let number = { value: 10};

// function increase (number) {
//     number.value ++;
// }

// increase(number)
// console.log(number)

// function displayMessage(firstName) {
//         alert("Hello " + firstName + ", hope you like JavaScript functions!")
// };

// function myfunc(name, name2, name3) {
//   console.dir(arguments);
//   console.log("Fuck YOUUUU" + " ," + name + " ," + name2 + ", " + name3);
// }

// myfunc("Charles", "Vivianne", "Franceska");

// var FirstnameLength = 0;
// var firstName = 'Charles';

// FirstnameLength = firstName.length;

// function wordBanks(myNoun, myAdjective, myVerb, myAdverb){
//   var result = " ";
//   result+= "The" + " " +  myAdjective + " " + myNoun + " " + myVerb +  " " + "to the store"

//   return result;
// }

// console.log(wordBanks("dog", "big", "ran", "quickly"));
// console.log(wordBanks("bike", "slow", "flew", "slowly"));

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
// myArray.push(["22", "23","24"]);
// var mydata = myArray[3][0][1];

// var myArray = [1,2,3];
// var removedFromTheArray = myArray.pop();

// function ourFunctionWithArgs(a, b) {
//   console.log(a * b);
// }
// ourFunctionWithArgs(10, 5);

// var myGlobal = 10;
// var oopsGlobal = 5;

// function fun() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal:" + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += "OopsGlobal:" + oopsGlobal;
//     }
//     console.log(output)
// }

// fun();

// function myLocalScope(){
//     var myVar =5;
//     console.log(myVar);
// }
// myLocalScope();

// var outerWear = "T-shirt";

// function myOutfit() {
//     var outerWear = "Sweater";
//     return outerWear;
// }

// console.log(myOutfit());
// console.log(outerWear);

// function addthree(num){
// return  num + 3;
// }
// console.log(addthree(1));

// var sum  = 0;
// function addthree(){
//     sum = sum + 3;
//     return sum;
// }

// console.log(addthree());

// changed function
// var changed = 0;
// function change(num) {
//   return (num + 5) / 3;
// }
// changed = change(10);
// console.log(changed);

// Possesed function
// var possessed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// possessed = processArg(7);
// console.log(possessed);

// Next inline function

// function nextInline(arr, item) {
//  return arr.push(item);
// //   return arr.shift();
// }

// var testArr = [1, 2, 3, 4, 5];
// console.log("Before : " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// var isItTrue = true;
// var isItFalse = false;
// function ourTrueOrFalse(isItTrue, isItFalse) {
//     if (isItTrue) {
//         return "Yes, it's True;"
//     } else (isItFalse) ;
//     {
//     return "No, it's False;"
// }
// };
// console.log(ourTrueOrFalse(isItFalse));

// var True = true;
// var False = false;

// function trueOrFalse(True, False) {
//   if (True) {
//     return "Yes that was true";
//   } else False;
//   {
//     return "No that is false";
//   }
// }
// console.log(trueOrFalse(False));

// function testEqual(val) {
//     if (val === 10) {
//         return "Equal";
//     }else (val) != 10 ; {
//         return "You Fucked up, they are not equal";
//     }
// };

// console.log(testEqual(2));

// function caseInSwitch(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//     case 4:
//       answer = "delta";
//       break;
//   }
//   return answer;
// };

// console.log(caseInSwitch(1));

// function switchofStuff(val) {
//   var answer = " ";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "chapati";
//       break;
//     case "d":
//       answer = "doritoes";
//       break;
//     default:
//       answer = "other stuff";
//       break;
//   }
//   return answer;
// }

// console.log(switchofStuff(2));

// var count = 0;
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "k":
//     case "A":
//       count--;
//       break;
//   }
//   var holdbet = "Hold";
//   if (count > 0) {
//     holdbet = "Bet";
//   }
//   return count + " " + holdbet;
// }

// cc("k");
// cc(10);
// cc("J");
// cc(3);
// cc("A");
// console.log(cc("J"));

// console.log(function(card));

// var myDog = {
//     "name": "Charles",
//     "Legs" : 4,
//     "tails" : 1,
//     "friends" : ["my owner & immediate family only"]
// };

// myDog.bark = "woof woof";

// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes" : "cleats"
// };

// var hatValue =  testObj.hat;
// varshirtValue = testObj.shirt;
// varshoeValue = testObj.shoes;

// var testObj = {
//     12:"Natan",
//     16:"Cruz",
//     19:"Newman"
// };

// var playerNUmber = 12;
// var player = testObj[playerNUmber];

// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkobj(checkProp) {
//   if (myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp];
//   } else {
//     return "Not Found"
//   }
// }

// console.log(checkobj("gift"));

// var myPlants = [
//   {
//     type:"Flowers",
//     list:[
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// var secondtree = myPlants[1].list[1];

//  code to add things inside an object

// var collection = {
//   "2548": {
//     "album": "Slippery When Wet",
//     "artist": "Bon Jovi",
//     "tracks": ["Let it Rock", "You Give Love a Bad Name"]
//   },
//   "2468": {
//     "album": "1999",
//     "artist": "Prince",
//     "tracks": ["1999", "Little Red Corvette"]
//   },
//   "1245": {
//     "artist": "Robert Palmer",
//     "tracks": []
//   },
//   "5439": {
//     "album": "ABBA GOLD"
//   }
// };

// // var collectionCopy = JSON.parse(JSON.stringify(collection));

// // function updateRecords(id, prop, value) {
// //   if (value === " ") {
// //     delete collection[id][prop];
// //   }else if (prop === "tracks"){
// //     collection[id][prop] = collection[id][prop] || [];
// //     collection[id][prop].push(value);
// //   }else {
// //     collection[id][prop] = value;
// //   }
// //   return collection;
// // }

// // updateRecords(1245, "tracks", "Astronmyy- Nothin on my mind")
// // console.log(updateRecords(5439, "artist", "ABBA"));

/* for loops run through your code until time to stop*/

// var myArray = [];

// var i = 0;
// while(i < 5) {
//   myArray.push(i);
//   i++;
// }

// console.log(myArray);

//another way to do it is

// var ourArray = [];
// for (var i = 1; i < 6; i++) {
//   ourArray.push(i);
// }

// console.log(ourArray);

var myArray = [];

for (var i = 1; i = 10; i += 2){
  myArray.push(i);
}

console.log(myArray);