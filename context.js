var x = {
    name: 'ritesh',
    printName: function name(params) {
        console.log(this.name)
    }
}

// it loses its `this` context
const nameFun = x.printName()
nameFun()