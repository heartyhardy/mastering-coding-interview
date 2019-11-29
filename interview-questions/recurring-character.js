const findDuplicate = arr => {
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

const findDuplicate2 = arr => {
    let map = new Map()
    for(let i=0;i< arr.length; i++){
        if(map.has(arr[i])){
            return [map.get(arr[i]),i]
        } else {
            map.set(arr[i],i)
        }
    }
    return null    
}

const findDuplicate3 = arr => {
    // This has to be a sorted array for this to work
    res = arr[0]
    for(let i=1; i<arr.length;i++){
        res = res ^ arr[i]        
        if(res === 0){
            return [i-1,i]
        }else{
            res = arr[i]
        }
    }
    return []
}

// let x = findDuplicate2([11, 12, 9, 10, 8, 9, 20])
let x = findDuplicate3([2,3,4,5,6,7,7])
console.log(x)