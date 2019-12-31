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
	swapped, passes, curpass := false, len(nums)-1, 0
	for {
		if nums[curpass] > nums[curpass+1] {
			tmp := nums[curpass]
			nums[curpass] = nums[curpass+1]
			nums[curpass+1] = tmp
			swapped = true
		}
		if curpass == passes-1 && swapped {
			passes--
			curpass = 0
			swapped = false
			continue
		} else if curpass == passes && !swapped {
			break
		}
		curpass++
	}
}
```