const reverseInt = (num) => {
  let reversedNum = num;
  let reversedString = '';
  const numString = num.toString();
  let negative = numString.charAt(0) === '-'
  for (let i = numString.length; i > 0; i--) {
    reversedString += numString.charAt(i -1);
  }

  return negative ? parseInt("-" + reversedString, 10) : parseInt(reversedString, 10);
}

reverseInt(1234)
reverseInt(12005)
reverseInt(1)
reverseInt(1000)
reverseInt(0)
reverseInt(-12345)
