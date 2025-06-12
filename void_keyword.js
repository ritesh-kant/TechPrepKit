// void is used when calling an async function and intentionally ignoring the result.

// Without void (can cause a linter warning):

async function doSomething() {
  console.log("Doing something...");
  // Simulate an async delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Done!");
}

function main() {
  doSomething(); // 🚨 May cause a linter warning: "Unhandled promise"
  console.log("Main function continues");
}

main();

// With void (no warning, intentional fire-and-forget):

async function doSomething() {
  console.log("Doing something...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Done!");
}

function main() {
  void doSomething(); // ✅ Tells JS/linter: "I know it's async and ignoring on purpose"
  console.log("Main function continues");
}

main();

// Output:

// Main function continues
// Doing something...
// Done!

// Why void is helpful:
// 	•	Makes the intent clear: you don’t want to wait for doSomething().
// 	•	Silences ESLint rules like no-floating-promises.
// 	•	Useful for background tasks or redirect flows, like in your original example.
