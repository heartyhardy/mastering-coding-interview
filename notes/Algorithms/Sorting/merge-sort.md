#Sorting

## Merge sort

Merge sort uses **Divide and Conquer** approach. Array is divided into single elements and then then merged after comparing with another.

This is a **Stable** sorting algorithm.

Merge sort is a **Comparison Sort**.

| Best | Average | Worst  | Space |
|------|---------|--------|-------|
|`O(n log n)`|`O(n log n)` |`O(n log n)`|`O(n)` | 

## Implmentations

```go
func mergeSort(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}
	m := len(nums) / 2
	return merge(mergeSort(nums[:m]), mergeSort(nums[m:]))
}

func merge(l, r []int) []int {
	size, i, j := len(l)+len(r), 0, 0
	res := make([]int, size, size)

	for k := 0; k < size; k++ {
		switch {
		case i == len(l):
			res[k] = r[j]
			j++
		case j == len(r):
			res[k] = l[i]
			i++
		case l[i] > r[j]:
			res[k] = r[j]
			j++
		case l[i] < r[j]:
			res[k] = l[i]
			i++
		case l[i] == r[j]:
			res[k] = r[j]
			j++
		}
	}
	return res
}

```