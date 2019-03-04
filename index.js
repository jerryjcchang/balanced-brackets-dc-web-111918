function isBalanced(str){
    if(str.length <= 1)
        return false

    let stack = []

    let openingBrackets = ['[','{','(']
    let closingBrackets = [']','}',')']

    for(let i = 0;i<str.length; i++){
        let char = str[i]

        if(closingBrackets.indexOf(char) > -1){
            let matchingOpenBracket = openingBrackets[closingBrackets.indexOf(char)]
            if(stack.length == 0 || (stack.pop() != matchingOpenBracket)){
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return (stack.length == 0)
}