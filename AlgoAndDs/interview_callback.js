// write a composition funtion to handle array of n async fns?
function compositeSqaureFn(initialValue, asyncFns) {
    let result = initialValue;
  
    execAsyncFn(0, asyncFns, result, (squaredValue) => {
      console.log(squaredValue)
    })
  }
  
  // Executes async function using recursion
  function execAsyncFn(index, asyncFns, result, cb) {
    // Exit condition
    if (index == asyncFns.length) {
      cb(result)
      return 
    }
  
    const currentFn = asyncFns[index]
    currentFn(result, (square) => {
      result = square;
      execAsyncFn(index + 1, asyncFns, result, cb)
    })
  }
  
  
  const sqaureAsync = (number, cb) => {
    setTimeout(() => {
      return cb(number * number)
    }, 1000)
  }
  
  const sqaureAsyncArray = [sqaureAsync, sqaureAsync, sqaureAsync]
  
  compositeSqaureFn(2, sqaureAsyncArray) //==> prints 256 after 3seconds
    // composition function = f(g(h(x)))