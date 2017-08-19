let firstName: string; // string

firstName = 'test';


let age: number = 10; //number

let dateOfBirth: Date; // Date

dateOfBirth = new Date('10-Nov-2013');

let employee: string[] = ['a', 'b', 'c'];

employee.push('test');
employee.push('test1');
employee.push('test2');

// employee.forEach(function (data) {
//     console.log(data);
// });

for (let empl of employee) {
    console.log(empl);
}

for (let empl in employee) {
    console.log(empl);
}


//employee.forEach((data) => console.log(data));

let emp = employee.filter((data) => data === 'test');

//console.log(emp);

let number: number[] = [10, 23, 34, 45];

let total = number.reduce((a, b) => a + b);

//console.log(total);

let isValid: boolean = false; // 

//console.log(isValid);

let departments: Array<string>; // generic Array


let unionType: string | null | number; // Union Data Types

unionType = null;

unionType = "test";


enum Color { Red, Green, Blue }; //Enumns

let red = Color.Blue;

let sampleType: any;
