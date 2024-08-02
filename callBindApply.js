// call, apply, bind

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
  
        // Here "this" points to nameObj
        console.log(this.name); 
    }
}
  
Object.prototype.MyBind = function(bindObj, ...args) {
    console.log(this)
    bindObj.MyMethod = this
    return function () {
        return bindObj.MyMethod(...args)
    }
}

Object.prototype.MyCall = function(bindObj,...args) {
    bindObj.MyMethod = this
    bindObj.MyMethod(...args)
}

Object.prototype.MyApply = function(bindObj,args) {
    bindObj.MyMethod = this
    bindObj.MyMethod(...args)
}

const x = PrintName.sayHi.MyBind(nameObj)
// PrintName.sayHi.MyCall(nameObj)
// nameObj.name = "dfd"
console.log(x())