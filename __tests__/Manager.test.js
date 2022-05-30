const Manager = require("../lib/Manager")

describe('Manager', () =>{
    describe("initialization", () => {

        it("should set office number using the constructor arguments", () => {
            // Arrange
            const officeNumber = 4444;
            // Act
            const manager = new Manager("Aku", 666, "aku@etest.com", officeNumber); 
            // Assert,
            expect(manager.officeNumber).toBe(officeNumber);

        });

        
    });

    describe("Get Method", () => {

        it("should get manager role using getRole()", () => {
            // Arrange
            const role = "Manager";
            // Act
            const manager = new Manager("Aku", 666, "aku@test.com", 4444); 
            const managerRole = manager.getRole();
            // Assert
            expect(managerRole).toBe(role);
        });

    });
})

 