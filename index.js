// Print all even numbers from 1 to 10.

let start = 1;
let end = 10;

for (let i=start; i<=end; i++) {
    if( i%2 === 0 ) {
        console.log(i);
    }
}

// calculate the sum of all numbers in an array

let arr = [ 1, 3, 5, 4, 7, 8, 3, 2, 1]

let sum = 0;

for (let num of arr) {
    sum += num; 
}

console.log(sum);

// Sort an array from smallest to largest

let newArr = arr.sort();

console.log('sorted', newArr);

// sort in reverse order

let reverseOrder = arr.sort((a,b) => b-a);
console.log('reverse', reverseOrder);


// converting objects to arrays

toArray({ a: 1, b: 2 })
// ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 })
// ➞ [["shrimp", 15], ["tots", 12]]

//toArray({})
// ➞ []

function toArray(obj) {
    // let keys = Object.keys(obj)
    // let values = Object.values(obj)
    // console.log(values);
    // console.log(keys);

    console.log(Object.entries(obj));

    // let combArray = []
    // for( let i=0; i<keys.length; i++) {
    //     combArray.push([keys[i] + ':' + values[i] ])
    // }
    // console.log(combArray);
}
