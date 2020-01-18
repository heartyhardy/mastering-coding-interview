#Searching

##BFS and DFS

* BFS goes through each node listing its **siblings**.
* DFS goes through a node **deeper** into its children first, and comes back up when it hits a leaf node, continues back from there.
* Traversal is `O(n)` for both.
* Difference is the **order**, when it comes to DFS and BFS.

**BFS is optimal for**
* Shortest Path
* Closer Nodes
* If the target node is likely to be near, choose BFS.

**NOTE**: **BFS requires more memory** as it needs to keep track of all siblings.

**DFS is optimal for**
* Doesn't know the target node exists or not.
* Target node likely to be at the bottom.

**NOTE**: **DFS can get slow**, although the time complexity is same.