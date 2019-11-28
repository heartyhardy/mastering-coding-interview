class ArrayList{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }

    pop(){
        const lastitem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastitem
    }

    shiftAll(index){
        for(let i=index; i< this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
    }

    delete(index){
        const item = this.data[index]
        if(item){
            this.shiftAll(index)
        }
    }

}

const arr = new ArrayList()
arr.push('A')
arr.push('B')

arr.delete(0)
console.log(arr.data)
