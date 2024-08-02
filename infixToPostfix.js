// Initialize an empty stack and an empty result string
var stack = [];
var result = "";

// Function to check if a character is an operator
function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
}

// Function to get the precedence of an operator
function getPrecedence(op) {
    switch (op) {
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

// Function to convert infix to postfix
function infixToPostfix(infix) {
    for (var i = 0; i < infix.length; i++) {
        var char = infix[i];
        if (char === " ") continue; // Skip spaces

        if (isOperator(char)) {
            while (stack.length > 0 && getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)) {
                result += stack.pop() + " ";
            }
            stack.push(char);
        } else if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                result += stack.pop() + " ";
            }
            stack.pop(); // Remove the "("
        } else {
            // Operand
            result += char + " ";
        }
    }

    // Pop any remaining operators from the stack
    while (stack.length > 0) {
        result += stack.pop() + " ";
    }

    return result.trim();
}

// Example usage
var infixExpression = "3 + 4 * (2 - 1)";
var postfixExpression = infixToPostfix(infixExpression);
console.log("Postfix expression:", postfixExpression);

// Example usage:
console.log(infixToPostfix("a+b*c")); // Output: "abc*+"
console.log(infixToPostfix("(a+b)*c")); // Output: "ab+c*"
console.log(infixToPostfix("a+b*c-d/e")); // Output: "abc*+de/-"
console.log(infixToPostfix("a+b*c-d/e")); // Output: "abc*+de/-"

