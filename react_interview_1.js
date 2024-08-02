let obj = {
    name: {
        value: "ritesh"
    }
}
let x = {
    toStringg : function() {
        return JSON.stringify({...this})
    }
}
// let o = Object.create({x:2}, { p: { value: 42 } });
let y = Object.create(x, obj)

console.log(y.toStringg())

// let x = "(a+b)*c"

// const ans = "ab+*"
// const prev = "ab+"

// function convert(str) {
//     let ans = ""
//     let prev
//     const operators = ["+", "-", "*"]
//     for (let i = 1; i < str.length; i++) {
//         if (operators.includes(str[i])) {
//             // if (prev) {
//             //     ans += prev + str[i + 1] + str[i]
//             //     continue;
//             // }
//             prev = str[i - 1] + str[i + 1] + str[i]
//             ans += prev
//         }
//     }
//     console.log(ans)
// }

// convert(x)

// let a = "abc"
// let b = "bcaaaabbcc"

// function check(){
//     const set = new Set(b)
//     const set2 = new Set(a)
//     for(let eachChar of set) {
//         if(!set2.has(eachChar)) {
//             console.log("Invalid")
//             return;
//         }
//     }
//     console.log("Valid string")
    
// }

// check()



// call stack  ====> web api / nodejs api (promiser) ==>  cb => task queue/ micro task queue => event loop

// useEffect,
// useState,
// usetSelector,
// useReduce,
// useMemo,
// useCallback,
// useRef,
// useContext

// function FirstComponent() {
//     let [name, setName] = useState()
//     useEffect( () => {

//         fetch()

//         return () => { console.log("unmount")}
//     }, [])

    
//     return <h1>hello</h1>
    
// }

// superparent -> parent -> child (props)
// useContext() -> simple oper
// redux => reduces => global store => componnets => depach(event) => reducer








