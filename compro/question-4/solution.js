const getCommonElements = (array1, array2) => {
  if (!array1 || !array2) return null;
  
  let common = [];
  array1.forEach((element) => {
    for (let i = 0; i < array2.length; i++) {
      if (element === array2[i]) common.push(element)
    }
  })
  
  return common
}

getCommonElements([1, 8, 3, 2], [4, 2, 6, 1])
getCommonElements([1, 8, 3, 2, 6], [2, 6, 1])
getCommonElements([1, 3, 7, 9], [7, 1, 9, 3])
getCommonElements([1, 2], [3, 4])
getCommonElements([], [1, 2, 3])
getCommonElements([1, 2], [])
getCommonElements([1, 2], null)
getCommonElements(null, [])
getCommonElements(null, null)