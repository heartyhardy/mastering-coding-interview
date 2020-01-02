#Sorting

## Selection sort

Bubbling up the largest value via multiple passes, hence the name "Bubble Sort"

| Best | Average | Worst  | Space |
|------|---------|--------|-------|
|`O(n^2)`|`O(n^2)` |`O(n^2)`|`O(1)` | 

## Implmentations

```go
func selectionSort(nums []int) {
	l, c, swp := 0, 0, false
	for i := 0; i < len(nums)-1; i++ {
		l, c = i, i
		for j := i + 1; j < len(nums); j++ {
			if nums[c] > nums[j] {
				c = j
				swp = true
			}
		}
		if swp {
			nums[l], nums[c] = nums[c], nums[l]
			swp = false
		}
	}
}
```