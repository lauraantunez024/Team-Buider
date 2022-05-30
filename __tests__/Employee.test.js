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
            const email = "Aku@mailinator.com";
            // Act
            const employee = new Employee("Aku", 666, email); 
            // Assert
            expect(employee.email).toBe(email);

        });
        
    });

    describe("Get Method", () => {
        




    })



})

 