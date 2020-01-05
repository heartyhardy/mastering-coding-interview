#Sorting

## Insertion sort

Insertion sort performs well when the target array is almost sorted. Algorithm picks an element and compares it with the elements to the left of it and inserts the source element accordingly.

Note that this is a **Stable** sorting algorithm.

| Best | Average | Worst  | Space |
|------|---------|--------|-------|
|`O(n)`|`O(n^2)` |`O(n^2)`|`O(1)` | 

## Implmentations

```go
func insertionSort(nums []int) {
	for i := 1; i < len(nums); i++ {
		k := nums[i]
		j := i - 1

		for j >= 0 && k < nums[j] {
			nums[j+1] = nums[j]
			j--
		}
		nums[j+1] = k
	}
}
```
