for(let i =0 ;i< 102; i++){
    // console.log(i)
}
process.on("message", (data) =>{
    console.log("child message:",data)
})
console.log(process.argv)
console.log(process.env)
process.send("completed")