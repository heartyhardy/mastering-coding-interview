#Graphs

* Graph is a set of related values in a pair-wise fashion.
* Each item is called a Vertex or a Node.
* Vertices are connected with Edges.
* Used in facebook for social networks and in google maps for determining shortest path.
* Graph is a master data structure in someway. Everything you see in this world can be mapped into a graph, If you think it through.

###Types of graphs

1. **Directed**
   >Directed Graphs usually convey a movement or **flow direction**. Usually not bi-directional but they can be.
2. **Undirected**
   > There is no sense of direction in Undirected graphs. Think of a road network where you can go back and forth. Another example is facebook new feed.
3. **Weighted**
   > Can be used to calculate shortest path.
4. **Unweighted**
5. **Cyclic**
   > When vertices are connected in a circlular fashion it's called Cyclic.
6. **Acyclic**
   
###Implementation methods

* **Edge list**
  > Here the array elements represent vertices
  ```js
    const graph = [[0,2], [2, 3], [2,1], [1,3]]
  ```
* Adjacent List
  > Here the **index** represents the actual node and the sub array elements represent connections
  ```js
    const graph = [[2], [2,3], [0, 1, 3], [1, 2]]
  ```
* Adjacent Matrix
  > Here a two-dimentional array indecies  represent connections to each node. 0 Represnts no connection and 1 represents connected. If it is weighted, then replace 1,0s with the actual weight value.

  ```js
    const graph = [
        [0, 0, 1, 0]
    ]
  ```
###Pros and COns

* **Pros**
  * Can maintain relationships

* **Cons**
  * Hard to scale
  