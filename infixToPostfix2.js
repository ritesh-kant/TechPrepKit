function getPrecedence(char) {
    switch (char) {
        case "+":
        case "-":
            return 1;
        case "*":
        case "/":
            return 2;
        default:
            return 0;
    }
}
function isOperator(operator) {
    return ["+", "-", "*", "/"].includes(operator)
}
function infixToPostfix(infix) {
    let ans = ""
    let stack = []
    for (let i = 0; i < infix.length; i++) {
        if (infix[i] >= '0' && infix[i] <= '9') {
            let temp = 0
            while (infix[i] >= '0' && infix[i] <= '9') {
                temp = temp * 10 + (infix[i] - '0')
                i+=1
            }
            ans += temp
            i--
        } else if (isOperator(infix[i])) {
            while (stack.length && getPrecedence(stack.at(-1)) >= getPrecedence(infix[i])) {
                ans += stack.pop()
            }
            stack.push(infix[i])
        } else if (infix[i] == "(") {
            stack.push("(")
        } else if (infix[i] == ")") {
            while (stack.length && stack.at(-1) != "(") {
                ans += stack.pop()
            }
            stack.pop()
        }
    }
    console.log(stack)
    ans += stack.join("")
    return ans
}

console.log(infixToPostfix("13*2+3"))