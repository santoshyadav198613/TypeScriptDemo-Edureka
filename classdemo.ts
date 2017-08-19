class Employee implements IEmployee {
    firstName: string;
    lastName: string;
    age: number;
    address: IAddress;

    constructor(private _calc: CalculatorService, fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    addEmployee(): number {
        this._calc.addNumber(2, 3);
        return 1;
    }

    edit(): boolean {
        return true;
    }

    add(): number {
        return 1;
    }


    delete() : boolean {
        return true;
    }

}

let testEmp = new Employee('a', 'b');
testEmp.address.addressLine1 = 'India';
testEmp.age = 23;
testEmp.addEmployee();
testEmp.edit();

console.log(testEmp);


interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zip: number;
}

interface IEmployee {
    address: IAddress;
    add() : number;
    edit() : boolean;
    delete(): boolean;
}

class CalculatorService {
    addNumber(num1: number, num2: number) {
        return num1 + num2;
    }

    subNumber(num1: number, num2: number) {
        return num1 - num2;
    }

    mulNumber(num1: number, num2: number) {
        return num1 * num2;
    }
}


// angular.module('myApp' ,['ui.router']);

// angular.controller('mycontroller',function(calcservice))