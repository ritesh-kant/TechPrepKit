// Debouncing is about delaying execution until after a period of inactivity.

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

window.addEventListener('resize', debounce(() => {
    console.log('Window resized!');
}, 250));


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