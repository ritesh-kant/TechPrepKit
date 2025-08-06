const app = require("express")()
const { Worker } = require("node:worker_threads")

app.get("/fast", (req, res) => {
    res.send("Fast")
})

app.get("/slow", (req, res) => {
    const worker = new Worker("./workerThreadChild.js", {workerData:{name:"test"}})
    worker.on("message", (msg) => {
        res.send(msg.toString())

    })
    worker.on("error", (err) => {   
        console.error("Worker error:", err)
        res.status(500).send("Worker error")
    })
    worker.on("exit", (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`)
            res.status(500).send("Worker stopped unexpectedly")
        }
    })
    
})

app.listen(8080, () => console.log("Server started"))