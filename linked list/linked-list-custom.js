class LinkedList{
    constructor(value = 0){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        let node = {
            value,
            next: null
        }
        this.tail.next = node
        this.tail = node
        this.length++

        return this
    }

    prepend(value){
        let node = {
            value,
            next : null
        }        
        node.next = this.head
        this.head = node
        this.length++

        return this
    }
}

let ll = new LinkedList(10)
.append(20)
.prepend(30)

start = ll.head

while(start){
    console.log(start)
    start = start.next
}