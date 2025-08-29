const EventEmitter = require("events")

class AsyncQueue extends EventEmitter{
  constructor(interval = 250){
    super();
    this.queue = []
    this.interval = interval
    this.timer = null
    this.running = false

    this.on("interval", (newInterval) => {
      this.interval = parseInt(newInterval)
      if(this.running) {
        this._restartTimer()
      }
    })
  }
  _restartTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(()=>{
      if(this.queue.length == 0) return;
      const item = this.queue.shift()
      this.emit("dequeued",item)
    }, this.interval)
  }
  enqueue(item){
    this.queue.push(item)
    this.emit("enqueued", item)
  }
  peek(){
    return this.queue?.[0] ?? null
  }
  print() {
    return [...this.queue]
  }
  getCurrentInterval(){
    return this.interval;
  }
  start(){
    if(this.running) return;

    this.running = true
    this._restartTimer();
  }
  pause() {
    if(this.running) {
      clearInterval(this.timer)
      this.timer = null
      this.running = false
    }
  }
}
module.exports = AsyncQueue