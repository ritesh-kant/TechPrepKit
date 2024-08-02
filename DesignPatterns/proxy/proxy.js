"use strict";
class EmployeeImpl {
    create() {
        console.log("Creating an employee");
    }
}
///////////////////////////proxy///////////////
class EmployeeProxy {
    constructor() {
        this.employee = new EmployeeImpl();
    }
    create() {
        console.log("Proxy called");
        this.employee.create();
    }
}
// ///////////Main////////////////////////////////
function main() {
    let emp = new EmployeeProxy();
    emp.create();
}
main();
