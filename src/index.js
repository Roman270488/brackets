module.exports = function check(str, bracketsConfig) {

  const bracketsOpen = []
  const bracketsClose = []
  const stack = []
  const objBrackKeyValue = {};

  bracketsConfig.map(item => {
    bracketsOpen.push(item[0])
    bracketsClose.push(item[1])
  })

  for (let i = 0; i < bracketsConfig.length; i++) {
    objBrackKeyValue[bracketsClose[i]] = bracketsOpen[i]
  }

  for (let i = 0; i < str.length; i++) {

    let topItem = stack[stack.length - 1]
    let currentItem = objBrackKeyValue[str[i]]

    if (topItem == currentItem && stack.length != 0){
      stack.pop()
    }else {
      stack.push(str[i])
    }  

  }

  return stack.length == 0 ?  true :  false
}
