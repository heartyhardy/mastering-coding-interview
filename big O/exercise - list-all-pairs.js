arr = [1, 2, 3, 4, 5]

const list_all_pairs_naive = (arr) => {
    for(i = 0; i < arr.length ; i++){
        for(j = 0; j < arr.length ; j++){
            console.log(`[${arr[i]}, ${arr[j]}]`)
        }
    }
}

const list_all_pairs_opt1 = (arr) => {
    for(i = 0; i < arr.length ; i++){
        for(j = 0; j <= i ; j++){
            console.log(`[${arr[i]}, ${arr[j]}]`)
        }
    }
}

const list_all_pairs_opt2 = (arr) => {
    for(i = 0; i < arr.length ; i++){
        for(j = i; j < arr.length ; j++){
            console.log(`[${arr[i]}, ${arr[j]}]`)
        }
    }
}

// list_all_pairs_naive(arr)
// list_all_pairs_opt1(arr)
//list_all_pairs_opt2(arr)