"use strict";

/* 4.1 */

function sum(array) {
    if (array.length === 0)  {
        return 0;
    }
    else {
        return array[0] + sum(array.slice(1));
    }        
}

/* console.log(sum([1,1,1,1,1])); */

/* 4.2 */

function count(list) {
    if (list.length === 0) {
        return 0;
    } else {
        return 1 + count(list.slice(1));
    }
}

const number = [1,2,3,4,5];
/* console.log(count(number)); */

/* 4.3 */

function max(list) {
    let largest = list[0];
    for (let i=0; i<list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }        
    }
    return largest;
}

const numbers = [1,2,3,4,5];
const largest = max(numbers);
console.log(largest);

