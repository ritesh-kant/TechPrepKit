// const app = require("express")()
// const { fork } = require("child_process")
// const path = require("path")

// app.get("/light", (req, res) => {
//     res.send("Resloved light request, easy peasy!")
// })
// app.get("/heavy", (req, res) => {
//     let data = offloadTask()
//     console.log(data)
//     res.send("Resolved heavy reques, phew!")
// })
// app.listen(3000, () => console.log("Listening to port 3000"))



// function offloadTask() {
//     let pathaddr = path.join(__dirname, "complexCalc.js")
//     let child = fork(pathaddr)
//     child.send("start")
//     child.on("message", (data) => {
//         console.log(data)
//         child.kill()
//         return data;
//     })
// }
// const generateRandom = () => {
//     let start = 97
//     // let end = 122
//     let rand = Math.floor(Math.random() * 25)
//     let randChar = (start+rand)
//     return String.fromCharCode(randChar)

// }


// function test() {
//     let first = generateRandom() + "" + generateRandom()
//     let second = generateRandom() + "" + generateRandom() + "" + generateRandom()
//     let third = generateRandom() + "" + generateRandom() + "" + generateRandom()
//     let forth = generateRandom()
//     console.log([first, second, third, forth].join("-"))
//     return [first, second, third, forth].join("-")

// }


// test()

// qq-www-eee-s

// wq-fgg-ttt-x

// gm-huk-sss-y

// as-tre-bni-e

// Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').
// For example, given an input such as this:
// {
//   'a': {
//     'b': {
//       'c': 12,
//       'd': 'Hello World'    },   
//       'e': [1,2,3]
//   }
// }
 
// return a new map:
// {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }
 
// The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and null
let ans = {}
let obj ={
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'    
    },   
    'e': [1,2,3]
  }
}
function dfs(obj, path) {
    if(obj == null || typeof obj != 'object' || Array.isArray(obj)) {
        ans[path.join("/")] = obj;
        return
    }
    for(let eachKey in obj) {
        dfs(obj[eachKey],[...path, eachKey] )
    }
}

dfs(obj,[])
console.log(ans)