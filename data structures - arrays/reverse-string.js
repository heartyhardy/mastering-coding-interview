const reverse = str => {
        
        let l = 0
        let r = str.length - 1
        let newstr = []

        while(l<=r){
            newstr.push(str[r])
            r--
        }
        return newstr.join('')
}

console.log(reverse("hello"))