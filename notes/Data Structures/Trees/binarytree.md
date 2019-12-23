#Trees

##Binaray Trees

A **binary tree** has _maximum of two children per node_

* There are two types of binary trees
  * Perfect binary trees
  * Full binary trees
  
* **Perfect binary tree** has following qualities
    * Everything is filled in.
    * Node has either zero or two children.
    * Bottom layer of the tree is completely filled.
    * very efficient
  
* **Full binary tree** is...
    * Node has either zero or two children, never one.

* When a binary tree is **perfect**, they have following **two properties**.
    * **Number of total nodes doubles** as we move down the tree. _ex: 1, 2,4,8 and so on._
    * **Sum of nodes in the last level** is **equal to the sum of all nodes above** bottom layer.
---
###Operations
**Perfect binary tree**

| Operation     | O(n)      |
|:--------------|-----------|
| Lookup        | `O(LogN`) |
| Insert        | `O(LogN)` |
| Delete        | `O(LogN)` |

### Nodes per level

| Level     | Total Nodes     |
|:--------------:|-----------|
| 1             | `2^0 = 1` |
| 2             | `2^1 = 2` |
| 3             | `2^2 = 4` |
| 4             | `2^3 = 8` |

Therefore,
**`# of Nodes = 2^h -1`**
**`Log nodes = h`**
(`h = height`)