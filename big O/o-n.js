const { performance } = require('perf_hooks');

const arr = ['billy', 'sandra', 'betha', 'nemo', 'moana']
const largearr = new Array(100000).fill('betha');
largearr[99999] = 'nemo'

console.log(largearr)

const findnemo = (arr) => {
    // start performance counter
    let t0 = performance.now();
    for( i=0 ;i < arr.length; i++){
        if(arr[i].toLowerCase() === 'nemo'){
            console.log(`Found Nemo at index: ${i}`)
        }
    }
    // stop performance counter
    let tdelta = performance.now() - t0
    console.log(`Operation carried out within ${tdelta} miliseconds`)
}

findnemo(arr);
findnemo(largearr)