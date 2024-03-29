var arr = [12, 'Ferrari', true, 12.4]
console.log(arr)

var a=arr[1]
console.log(a)
console.log(arr[3])

arr[1] = 'Bentley'
console.log(arr[1])
console.log('Length of the array is',arr.length)

var arr2 = [12, 14, 56, 57]

arr2.pop()
console.log('popped arr2',arr2)

arr2.push(100)

console.log('pushed with 100 arr2',arr2)

arr2.shift()

console.log('shifted arr2',arr2)

arr2.unshift(102)


console.log('unshifted arr2',arr2)