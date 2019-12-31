#Recursion

Recursion itself is not really an algorithm, but a concept which is used to wright algorithms in a specific manner.

Recursion is great for **solving tasks which have repeated sub-tasks within them**.

>**Recursive function** is a function that referes to itself inside the function.

* Listing all files in folders.
* Counting all words within a paragraph in a letter.
* Listing everything in a JSON object.

###Issues with recursion

1. Can be difficut to understand at first.
2. Can cause **stack overflow** if not careful.
3. Anything that can be implemented with recursion, CAN be implemented with loops.

####Stack overflow

```golang
    func run(){
        run()
    }
```
* In above case, `run()` function keeps calling itself, until the `maximum stack size` exceeds.

#### Anatomy of a recursive function

A recursive function has two parts.
1. **Recursive case**
   > If there are remaining sub-tasks, keep doing them util, base case reached.
2. **Base case**
   > If the base case is reached. Simply stop and `return`.

```go
    var count int = 0
    func run() string{
        if count > 10{
            return "done"
        }
        count++
        return run()
    }
```
**Tip** Always remeber to `return` so the return values **bubbles up** the stack when its finished.

#### Why would you ever use recursion?

* Easier to read, due to clean code.
* **DRY** principle can be preserved with recursion
* In **Tree** data structures, it is easy to use recursion where you dont know a loop count.
* Its easy to use recursion in **BFS and DFS**.
* Used in **Divide and Conquer** situations.

#### Optimizations

* Read more about **Tail call optimization**
* Read more about **Dynamic programming**

#### Applications

* Merge sort
* Quick sort
* Tree traversal
* Graph traversal

[Recursion real world applications](https://stackoverflow.com/questions/105838/real-world-examples-of-recursion)