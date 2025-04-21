// The goal of this program is to compose an array of asynchronous functions (which work like f(g(h(x)))) and apply them one after another to an initial value using callback functions.

// soution using callback
function composeAsync(initialValue, asyncFns, finalCallback) {
  function next(index, value) {
    if (index === asyncFns.length) {
      return finalCallback(value);
    }

    asyncFns[index](value, (result) => {
      next(index + 1, result);
    });
  }

  next(0, initialValue);
}

// Async square function
function asyncSquare(n, cb) {
  setTimeout(() => cb(n * n), 1000);
}

// Compose with 3 async squares
const functions = [asyncSquare, asyncSquare, asyncSquare];

composeAsync(2, functions, (result) => {
  console.log(result); // prints 256 after ~3s
});


// solution using async/await
function asyncSquare(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * n), 1000);
  });
}

// Compose function using async/await
async function composeAsync(initialValue, asyncFns) {
  let result = initialValue;

  for (const fn of asyncFns) {
    result = await fn(result); // wait for each async fn to finish
  }

  console.log(result); // Final result
}

// Compose with 3 async squares
const func = [asyncSquare, asyncSquare, asyncSquare];

composeAsync(2, func); // prints 256 after ~3s