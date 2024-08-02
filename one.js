function counter() {
    let count = 0
    this.increment = function() {
        count++
        console.log(count)
    }
}

let x = new counter()
x.increment();
x.decrement();