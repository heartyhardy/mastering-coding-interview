#Binary Search Tree

| Operation     | O(n)      |
|:--------------|-----------|
| Lookup        | `O(LogN`) |
| Insert        | `O(LogN)` |
| Delete        | `O(LogN)` |


| Pros                    | Cons      |
|:------------------------|-----------|
| Better than `O(n)`        | No `O(1)` operations |
| Ordered                 |                    |
| Flexible                |                    |

**Q.** Why is this better than a hashtable?
**A.** Binaray search tree **preserves relationships**

### Rules of binary search trees

1. Starting from the **root**, if you keep going **to the right**, **value of the child nodes** should be **greater than** the **current node**.
2. If you keep going to the **left**, it **decreases**.
   
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/800px-Binary_search_tree.svg.png "Binary Search Tree")

3. Node can have **maximum of two children**.


### Advantages of the rules

1. If you want to lookup value 1 for example, starting at the root...
   * Is 8 > 1 ? No? then go to the left
   * Is 3 > 1 ? No? then go to the left
2. If you want to lookup 14...
    * Is 8 < 14 ? Yes? then go to the right
    * Is 10 < 14 ? Yes? then go to the right
3. If you want to delete 6...
    * Look up node 6
    * is 7 > 4 No? then 7 takes the place of 6 and 4 remains as a child of 7

### Disadvantages

1. When the BST is **unbalanced** all the operations become **`O(n)`**


