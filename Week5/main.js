 //Q1
 let numbers = [1, 2, 3, 4];

const oddNumbers = numbers.filter( function ( num ) {
    return num % 2 !== 0;  
});
const doubleMyOddNumbers = oddNumbers.map( number => number + 2 );

console.log( "The doubled numbers are ",  doubleMyOddNumbers );

//Q2
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat( tuesday );
console.log ( tasks );

//Q2.1 
const myTasks = tasks.map( function( task1 ){
    return task1.name, task1.duration;
})
console.log ( myTasks );

//Q2.2 convert minutes to hours
const convertToHours = [];
const minuteDurations = tasks;
for ( var i = 0; i < minuteDurations.length; i++ ) {
    convertToHours.push(( minuteDurations[i].duration)/60 );
};
console.log ( convertToHours );

//Q2.3 filter less than an hour figure
const lessThanTwoHours = convertToHours.filter ( numbers => numbers < 2 );
console.log ( lessThanTwoHours );

// Q2.4 Multiply

const  perHourRate = convertToHours.map( rate => rate * 14 );
const myResult = Math.round(perHourRate)

// The total sum
function total ( add, number ) {
    return add + number;
}
console.log ( "The total is " + "\u20AC"+ Math.round(perHourRate.reduce (total )));

