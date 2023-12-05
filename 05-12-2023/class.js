// try{
//     console.log(a+b)
// } catch(err){
//     console.log(err)
//     console.log('there was an error')
//     console.log('there was savedinerror log')
// }
// console.log

// class Car{
//     constructor(color,speed){
//         this.color=color;
//         this.speed=speed;
//     }
//     turboOn(){
//         console.log("turbo is on!")
//     }

//     const car1=new Car("red", 120)
//     car1.turboOn();
// }


// let greet="Hello";
// let place="world";
// console.log(`${greet} ${place}`);
// console.log(`${1+1+1+1+1}stars!`);

let top3=[
    "bilal",
    "asif",
    "jandho"
];
function showItinerary(place1,place2,place3){
    console.log("Visit"+place1);
    console.log("then visit"+place2);
    console.log("finish with a visit to"+place3);
}
showItinerary(...top3);

