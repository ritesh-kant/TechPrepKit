function curry(f) {
    return function(a) {
        return function(b){
            return f(a,b)
        }
    }
}

const logger = function(date, message) {
    console.log(`${date}: ${message}`);
}

const log = curry(logger)
const newLogger = log(Date.now())
newLogger("started")
newLogger("ended")