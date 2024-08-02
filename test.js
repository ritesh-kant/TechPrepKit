async function test() {
    console.log("test")
    return "hello"
}
async function test2(){
    console.count("test2")
    const x = await test()
    return x
}

async function main() {
 const x =  test2()
 console.log(x)
 console.log("main")
}

main()