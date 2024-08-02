const { workerData,parentPort} = require("node:worker_threads")
let j;
console.log(workerData)
for (let i = 0; i < 99; i++) {
    j = i
}
parentPort.postMessage(j.toString())