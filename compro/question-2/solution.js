const getSubChars = (characters, start, count) => {
  // If start position or count is negative return null
  if (start < 0 || count < 0) return null;

  // If count is greater than length or greater than remaining characters return null
  if (count > characters.length || count > characters.slice(start, start + count).length) return null;

  return characters.slice(start, start + count);
  
}


getSubChars(["a", "b", "c"], 0, 4)
getSubChars(["a", "b", "c"], 0, 3)
getSubChars(["a", "b", "c"], 0, 2)
getSubChars(["a", "b", "c"], 0, 1)
getSubChars(["a", "b", "c"], 1, 3)
getSubChars(["a", "b", "c"], 1, 2)
getSubChars(["a", "b", "c"], 1, 1)
getSubChars(["a", "b", "c"], 2, 2)
getSubChars(["a", "b", "c"], 2, 1)
getSubChars(["a", "b", "c"], 3, 1)
getSubChars(["a", "b", "c"], 1, 0)
getSubChars(["a", "b", "c"], -1, 2)
getSubChars(["a", "b", "c"], -1, -2)
getSubChars([], 0, 1)