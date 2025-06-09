// Debouncing is about delaying execution until after a period of inactivity.

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

const debounceFn = debounce(() => { 
    console.log("debounced") 
}, 2000)

debounceFn()


// Throttling is about limiting execution to a specific interval.

function throttle(func, delay) {
    let timeout;
    return function (...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                timeout = null;
            }, delay);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled!');
}, 100)); 

// `this` refers to the context of the function that the returned throttled (or debounced) function is called from.