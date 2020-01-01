#Sorting

## Bubble sort

Bubbling up the largest value via multiple passes, hence the name "Bubble Sort"

| Best | Average | Worst  | Space |
|------|---------|--------|-------|
|`O(n)`|`O(n^2)` |`O(n^2)`|`O(1)` | 

## Implmentations

**Optimized solution**
```go
func bubblesort(nums []int) {
	swp := false
	l := len(nums) - 1
	for i := 0; i < l; i++ {
		if nums[i] > nums[i+1] {
			t := nums[i]
			nums[i] = nums[i+1]
			nums[i+1] = t
			swp = true
		}
		if i == l-1 && !swp {
			break
		} else if i == l-1 && swp {
			l--
			i = -1
			swp = false
			continue
		}
	}
}
```

**Descending, Optimized**

```go
func bubblesort(nums []int) {
	swp := false
	l := len(nums) - 1
	for i := 0; i < l; i++ {
		if nums[i] < nums[i+1] {
			t := nums[i]
			nums[i] = nums[i+1]
			nums[i+1] = t
			swp = true
		}
		if i == l-1 && !swp {
			break
		} else if i == l-1 && swp {
			l--
			i = -1
			swp = false
			continue
		}
	}
}
```
