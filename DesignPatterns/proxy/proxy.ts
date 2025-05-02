// Structual design pattern
interface Employee {
    create(): void;
}

class EmployeeImpl implements Employee {
    create() {
        console.log("Creating an employee");
    }
}

class EmployeeProxy implements Employee {
    employee: Employee;

    constructor() {
        this.employee = new EmployeeImpl();
    }
    create(): void {
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