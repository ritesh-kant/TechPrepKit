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
    
})

app.listen(8080, () => console.log("Server started"))