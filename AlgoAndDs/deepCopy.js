function deepCopy(obj) {
    // if (obj === null || typeof obj !== 'object') {
    if (!(obj instanceof Object)) {
      return obj; // Return primitive types or null as is
    }
  
    const copy = Array.isArray(obj) ? [] : {}; // Determine if obj is an array or object
  
    for (let key in obj) {
    //   if (Object.hasOwn(obj, key)) {
        copy[key] = deepCopy(obj[key]); // Recursively copy nested objects or arrays
    //   }
    }
  
    return copy;
  }
  
  // Example usage:
  const originalObject = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
      e: null,
      f:undefined
    },
    g: [{name:1},"hello"]
  };
  
  const copiedObject = deepCopy(originalObject);
  console.log(copiedObject);
  