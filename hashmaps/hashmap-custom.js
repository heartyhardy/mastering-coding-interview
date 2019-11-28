class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value){
        let hkey = this._hash(key)
        if(!this.data[hkey]){
            this.data[hkey] = []
        }
        this.data[hkey].push(key, value)
    }

    get(key){
        let currentbucket = this.data[this._hash(key)]
        if(currentbucket){
            for(let i=0;i<currentbucket.length;i++){
                if(currentbucket[i][0] === key){
                    return currentbucket[i][1]
                }
            }
        }
        return undefined
    }
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  console.log(myHashTable.data)
  