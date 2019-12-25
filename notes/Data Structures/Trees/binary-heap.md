#Binary Heap

| Operation     | Big O      |
|:--------------|-----------|
| Lookup        | `O(N`) |
| Insert        | `O(LogN)` |
| Delete        | `O(LogN)` |

| Pros                    | Cons               |
|:------------------------|--------------------|
| Better than `O(n)`        | Slow Lookup      |
| Priority                |                    |
| Flexible Size           |                    |
| Fast Insert             |                    |

There are **two types of heaps**.
1. Max Heap
   >In a Max heap, **root node is the highest**. Rest decreases as you go down the tree.

    ![alt-text](https://media.geeksforgeeks.org/wp-content/uploads/MaxHeap.png "Max Heap")
   
2. Min Heap
   >Min heap is the opposite of the Max Heap, where the **root node is the lowest**.

    ![alt-text](   https://1.bp.blogspot.com/-vG4b9IvVjPQ/XayDS_dQzrI/AAAAAAAAAjU/K8wSt3NGRAM2pcnbCEMu1F2bRAxGRSrzwCEwYBhgL/s320/min-heap-1.PNG "Min Heap")

####Why Heaps are used?

* Heaps are great when you need to **search and fetch data comparatively**. For an instance, if we have to pick all employees older than 30, this is much easier and faster to do in a heap since it is naturally ordered.
* A **Priority Queue** can be implemented via a heap.
* Getting `Min` or `Max` is fast, `O(1)` operation in a heap.

####Implementation Tips

* Binary heap can be implemented via an **Array** because, they preserve **left to right order** when it comes to inserting.
