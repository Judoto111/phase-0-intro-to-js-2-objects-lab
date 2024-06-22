// Write your solution in this file!
let employee = {
    name: "Leanne Blessing",
    streetAddress: "123 Main St"
};


// Function to update an employee Object immutably
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update an employee Object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from an employee Object immutably
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key from an employee Object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log("Original employee:", employee);

// Testing updateEmployeeWithKeyAndValue()
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log("Updated employee (immutably):", updatedEmployee);
console.log("Original employee (unchanged):", employee);

// Testing destructivelyUpdateEmployeeWithKeyAndValue()
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Ave');
console.log("Destructively updated employee:", employee);

// Testing deleteFromEmployeeByKey()
let employeeAfterDelete = deleteFromEmployeeByKey(employee, 'name');
console.log("Employee after delete (immutably):", employeeAfterDelete);
console.log("Original employee (unchanged):", employee);

// Testing destructivelyDeleteFromEmployeeByKey()
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Destructively deleted employee:", employee);
    









