const mergeArrays = (arr1, arr2) => {
    // Arrays are sorted
    // a = [ 1, 2,4 , 6, 8]
    // b = [3, 4, 5, 7, 8]

    c = []
    let i = j = 0
    n = arr1.length < arr2.length ? arr2.length : arr1.length 


    while(i < n && j < n){

        if(a[i] === undefined && b[j]){
            c.push(b[j])
            j++
            continue
        }
        else if(a[i] && b[j] === undefined){
            c.push(a[i])
            i++
            continue
        }

        if(a[i] < b[j]){
            c.push(a[i])
            i++
        }
        else if(a[i] > b[j]){
            c.push(b[j])
            j++
        }
        else if(a[i] == b[j]){
            c.push(a[i])
            c.push(b[j])
            i++
            j++
        }
    }
    return c
}

b = [ 1, 2,4 , 6, 8, 9, 10]
a = [3, 4, 5, 7, 8]

c = mergeArrays(a,b)
for(i in c){
    console.log(c[i])
}