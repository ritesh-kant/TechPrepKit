const {fork} = require("child_process")

const child = fork("./child.js", ["1"], {env:{name:"ritesh"}})
child.on("message", (data) =>{
    console.log("message",data)
})

child.on("exit", (code) => {
    console.log("exit code", code)
})