const case1 = {
    a : ['a', 'b', 'c', 'd'],
    b : ['x', 'y', 'z', 'n']
}

const case2 = {
    a : ['a', 'b', 'c', 'd'],
    b : ['i', 'j', 'a', 'n']
}

// Naive approach
// const has_common_items = (arr1, arr2) => {
//     let result = false
//     for(let i = 0; i< arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i]===arr2[j]){
//                 result = true
//                 return result
//             }          
//         }
//     }
//     return result
// }

// Time complexity is O(n^2)

// console.log(has_common_items(case1.a, case1.b))
// console.log(has_common_items(case2.a, case2.b))

// Optimized solution

// const has_common_items_opt = (arr1, arr2) => {
//     let m = new Map();
//     z = [...arr1, ...arr2] // O(n)
//     for(i=0; i< z.length; i++){ // O(m)
//         if(m.has(z[i])){
//             return true
//         }
//         else{
//             m.set(z[i])
//         }
//     }
//     return false
// }

// // TIme complexity = O(n+m)

// console.log(has_common_items_opt(case1.a, case1.b))
// console.log(has_common_items_opt(case2.a, case2.b))


// ES6 way
const has_common_items_es6 = (arr1, arr2) => {
    return arr1.some(e => arr2.includes(e))
}

console.log(has_common_items_es6(case1.a, case1.b))
console.log(has_common_items_es6(case2.a, case2.b))
