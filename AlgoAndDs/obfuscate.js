// function obfuscate(data, targets) {
//     Object.keys(data).forEach((eachKey) => {
//         if (targets.includes(eachKey)) {
//             data[eachKey] = "****************"
//         } else if (Array.isArray(data[eachKey])) {
//             data[eachKey].forEach((eachValue) => {
//                 obfuscate(eachValue, targets)
//             })
//             obfuscate(data[eachKey], targets)
//         } else if(data[eachKey] instanceof Object) {
//             obfuscate(data[eachKey], targets)
//         }
//     })
//     console.log(data)
// }

// const data = {
//     "name": "ritesh",
//     "email": "ritesh@gmail.com",
//     "address": [
//         {
//             "city": "delhi",
//             "phone": "34555"
//         },
//         {
//             "city": "bangalore",
//             "phone": "34555"
//         }
//     ],
//     "defaultAddress": {
//         city: "ranchi",
//         phone: "55567"
//     }
// }
// obfuscate(data, ["email", "phone"])

const obj = {
    eNo: 47,
    eName: "Ritesh",
    address: [ {city: "Bangalore", phone:"123"}, {city: "Ranchi"}],
    email: {
        personal: "xyz.com"
    },
    phone: "234"
}
const obfuscate = ["phone","email"]

function mask(obj, key) {
    if(!(obj instanceof Object)) {
        if( obfuscate.includes(key)) return "****"
        return obj
    }
    const result = Array.isArray(obj) ? []: {}
    for(let eachitem in obj){
        obj[eachitem] = mask(obj[eachitem], eachitem)
    }
   return result
}
mask(obj)
console.log(obj)