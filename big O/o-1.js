const { performance } = require('perf_hooks');

const largearr = new Array(1).fill('betha');
largearr[99999] = 'nemo'

const cached = [1111, 2222, 9999, 99999]

const findnemo = (arr) => {
    // start performance counter
    let t0 = performance.now();
    console.log(`Cached items: ${arr[1111]} ${arr[2222]} ${arr[3333]} ${arr[99999]}`)
    // stop performance counter
    let tdelta = performance.now() - t0
    console.log(`Operation carried out within ${tdelta} miliseconds`)
}

findnemo(largearr)