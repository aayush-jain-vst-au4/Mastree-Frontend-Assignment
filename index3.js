// Task 3 -->  Climb Stairs

function cs(n) {
    if (n < 1) {
        return `Number of stairs cannot be ${n}`
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return cs(n - 1) + cs(n - 2)
}

// Example

// console.log(cs(4))
console.log(cs(4))
// console.log(cs(6))

// Call the 'cs' function with input N = No. of stairs to get the number of unique ways to climb the stairs.


function CS(n) {
    let array0 = []
    let array1 = [
        [1]
    ]
    let array2 = [
        [1, 1],
        [2]
    ]
    let soln = [array0, array1, array2]
    if (n < 1) {
        return `Number of stairs cannot be ${n}`
    }
    if (n === 1) {
        // console.log(soln[1]);
        return soln[1];
    }
    if (n === 2) {
        // console.log(soln[2]);
        return soln[2]
    }
    for (let i = 3; i <= n; i++) {
        // console.log(i)
        let array = []
        let arrayOneBefore = soln[i - 1]; // add 1 always
        // console.log("arrayOneBefore initially", arrayOneBefore)
        let arrayTwoBefore = soln[i - 2]; // add 2 always
        // console.log("arrayTwoBefore initially", arrayTwoBefore)
        for (let j = 0; j < arrayOneBefore.length; j++) {
            let arr = arrayOneBefore[j].slice(0)
                // console.log("Push 1 at last in this array", j, arr)
            arr.push('1')
            array.push(arr)
        }
        for (let k = 0; k < arrayTwoBefore.length; k++) {
            let arr = arrayTwoBefore[k].slice(0)
                // console.log("Push 2 at last in this array", k, arr)
            arr.push('2')
            array.push(arr)
        }
        // soln[i] = [...arrayTwoBefore, ...arrayOneBefore]

        // console.log("soln for ", i, array)
        soln[i] = array
    }
    return soln[n]
}

// console.log(cs(-1))

/* console.log(cs(1))
console.log(cs(2))
console.log(cs(3)) */

console.log(CS(4))

// Call the 'CS' function with input N = No. of stairs to get an array of the exact steps for each unique way.