// var result=40;
// if(result>40){
//     console.log("Congratulations you are passed");
// }else{
//     console.log("Unfortunately you did'nt pass")
// }


// var food="cold";
// if(food=="hot"){
//     console.log('Too hot')
// }
// else if(food=="cold"){
//     console.log('too cold')
// }
// else{
//     console.log('just right')
// }

//switch statement
// var place='second';
// switch(place){
//     case'first':
//     console.log('Gold');
//     break;
//     case'second':
//     console.log('silver');
//     break;
//     case'third':
//     console.log('bronze');
//     break;
//     default:
//         console.log('no medal');
// }

// var age=10;
// if(age>=65){
//     console.log('you will get your pension at first age')
// }
// else if(age<65 && age>=18){
//     console.log('each month you get a salary')
// }
// else{
//     console.log('you will not get a salary')
// }


// var day = 'sunday';
// switch(day){
//     case'sunday':
//     console.log('last day of week');
//     break;
//     case'monday':
//     console.log('first day of week');
//     break;
//     case'tuesday':
//     console.log('second day of week');
//     break;
//     case'wednesday':
//     console.log('third day of week');
//     case'thrusday':
//     console.log('4th day of week');
//     case'friday':
//     console.log('5th day of week');
//     case'satuday':
//     console.log('6th day of week');
//     default:
//         console.log('no day');
// }


//   loops
// for(var i=1 ;i<4; i++){
//     console.log(i);
// }

// var i=1;
// while(i<5){
//     console.log('BILAL Asif')
//     i=i+1;
// 

// for(i=1; i<=2 ;i++){
//     for(j=1; j<=5 ;j++){
//         console.log("Week" + i + "day" +j);
//     }
// }

// for(var i=1; i<=10; i++){
//     switch (i){
//         case 1:
//         console.log('gold medal')
//         break
//         case 2:
//             console.log('silver medal')
//         break
//         case 3:
//             console.log('Bronze medal')
//         break
//         default:
//             console.log(i)
//     }
// }

// function addTwoNums(){
//     var a=10;
//     var b=20;
//     var c= a+b;
//     console.log(c);
// }
// addTwoNums();

// function addTwoNums(){
//     var a=10;
//     var b=60;
//     var c= a+b;
//     console.log(c);
// }
// addTwoNums();

// function addTwoNums(a,b){
//     var c=a+b;
//     console.log(c);
// }
// addTwoNums(3,3);

// array
// var train1 =["wheat","barley"," veges","salt","rocks"];
// console.log(train1);
// // console.log(train1[1]);
// console.log(typeof(train1));

// function listArrayItems(arr){
//     for (var i=0; i<arr.length;i++){
//         console.log(arr[i])
//     }
// }
// var colors=['red','orange','yellow','pink','green'];
// listArrayItems(colors);


// quiz
// function letterfinder(word,match){
//     for(let i=1; i<word.length; i++){
//         if(word[i] === match){
//             console.log('found the',match,'at',i);
//         }else{
//             console.log('---NO match found at',i);
//         }
//     }
// }
// letterfinder("nestle", 'e');


//  var table={
//     legs:3,
//     color:"brown",
//     priceUSD:100,
//  }
//  console.log(table);
//  console.log(table.color);
 
// var car={};
// car.color="red";
// car["color"]="green";
// car["speed"]=200;
// car.speed=100;
// console.log(car);

// var arrOfKeys{'speed','altitude','color'}
// var drone={
//     speed:100,
//     altitude:200,
//     color:"red"
// }
// for(var i=0; i<arrOfKeys.length;i++){
//     console.log(drone[arrOfKeys[i]]);
// }

// var fruits=[];
// fruits.push("apple");
// fruits.push("pear");
// fruits.pop();
// console.log(fruits);

function arrayBuilder(one,two,three) {
    var arr[];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr=arrayBuilder('apple','pear','plum');
console.log(simpleArr);