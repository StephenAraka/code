const isCenteredArray = (array) => {

  if (array.length === 0) return 0
  
  if (array.length === 1) return 1
  
  if (array.length % 2 == 0) return 0
  
  let middleIndex = Math.floor(array.length / 2)
  
  for (let i = 0; i < middleIndex; i++) {
    if (array[i] < array[middleIndex]) return 0
  }
  
  for (let i = middleIndex+1; i <= array.length; i++) {
    if (array[i] < array[middleIndex]) return 0
  }
  
  return 1; 
}

isCenteredArray([6, 2, 7])
isCenteredArray([1, 2, 3, 4, 5])
isCenteredArray([3, 2, 1, 4, 5])
isCenteredArray([3, 2, 1, 4, 1])
isCenteredArray([1, 2, 3, 4])
isCenteredArray([])
isCenteredArray([10])