#Sorting

##How to choose a suitable algorithm

* If the **input is small and almost sorted**, go for **Insertion Sort**
* For **educational purposes**, start with **Bubble Sort** and **Selection Sort**
* If you're worried about worst case scenarios, go for **Merge Sort**. It is really efficient `O(n long n)` and uses divide and conquer. **However, it has O(n) space complexity.**
* If you're performing **in-memory sorting**, and/or **worried about space complexity**, use **Quick Sort** as it has `O(log n)` space complexity. **Heap Sort** is another option.