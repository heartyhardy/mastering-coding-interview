const findDuplicate = arr => {
    // Return if arr.len < 2
    // Convert char to ascii -> int
    // Use XOR operator
    // num xor num = 0
    // num xor 0 = num
    let obj = {}
    for(let i=0;i< arr.length; i++){
        if(obj[arr[i]] !== undefined){
            return [obj[arr[i]],i]
        } else {
            obj[arr[i]] = i
        }
    }
    return null
    
}

let x = findDuplicate([11, 12, 9, 10, 8, 9, 20])
console.log(x)