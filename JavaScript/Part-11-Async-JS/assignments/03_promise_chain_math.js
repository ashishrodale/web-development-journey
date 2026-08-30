// ASSIGNMENT 3: Asynchronous Sequential Math Pipeline
function asyncMathOp(initialValue, operation, operand, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result;
            switch (operation) {
                case "add": result = initialValue + operand; break;
                case "multiply": result = initialValue * operand; break;
                case "subtract": result = initialValue - operand; break;
                default: result = initialValue;
            }
            console.log(`Performed ${operation} ${operand}: ${initialValue} -> ${result}`);
            resolve(result);
        }, delay);
    });
}

asyncMathOp(10, "add", 5, 500)
    .then((res) => asyncMathOp(res, "multiply", 3, 500))
    .then((res) => asyncMathOp(res, "subtract", 15, 500))
    .then((finalResult) => console.log("Final Pipeline Output:", finalResult));
