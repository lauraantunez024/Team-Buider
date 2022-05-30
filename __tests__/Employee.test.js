const Employee = require("../lib/Employee")

describe('Employee', () =>{
    describe("initialization", () => {
        it("should make an employee instance", () => {
            // Arrange
            const employee = new Employee(); 
            // Act
            // Assert
            expect(typeof(employee)).toBe("object");

        });

        it("should set name using the constructor arguments", () => {
            // Arrange
            const name = "Aku";
            // Act
            const employee = new Employee(name); 
            // Assert
            expect(employee.name).toBe(name);

        });

        it("should set id using the constructor arguments", () => {
            // Arrange
            const id = 666;
            // Act
            const employee = new Employee("Aku", id); 
            // Assert
            expect(employee.id).toBe(id);

        });

        it("should set email using the constructor arguments", () => {
            // Arrange
            const email = "Aku@test.com";
            // Act
            const employee = new Employee("Aku", 666, email); 
            // Assert
            expect(employee.email).toBe(email);

        });
        
    });

    describe("Get Method", () => {
        it("should get employee name using getName()", () => {
            // Arrange
            const name = "Aku";
            // Act
            const employee = new Employee(name, 666, "aku@test.com"); 
            const employeeName = employee.getName();
            // Assert
            expect(employeeName).toBe(name);

        });
        it("should get employee id using getId()", () => {
            // Arrange
            const id = "Aku";
            // Act
            const employee = new Employee("Aku", id, "aku@test.com"); 
            const employeeId = employee.getId();
            // Assert
            expect(employeeId).toBe(id);

        });
        it("should get employee email using getEmail()", () => {
            // Arrange
            const email = "Aku";
            // Act
            const employee = new Employee("Aku", 666, email); 
            const employeeEmail = employee.getEmail();
            // Assert
            expect(employeeEmail).toBe(email);
        });
        it("should get employee role using getRole()", () => {
            // Arrange
            const role = "Employee";
            // Act
            const employee = new Employee("Aku", 666, "aku@test.com"); 
            const employeeRole = employee.getRole();
            // Assert
            expect(employeeRole).toBe(role);
        });
      





    })



})

 