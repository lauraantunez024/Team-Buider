const Intern = require("../lib/Intern")

describe('Intern', () =>{
    describe("initialization", () => {

        it("should set school using the constructor arguments", () => {
            // Arrange
            const school = "Harvard";
            // Act
            const intern = new Intern("Aku", 666, "aku@etest.com", school); 
            // Assert,
            expect(intern.school).toBe(school);

        });

        
    });

    describe("Get Method", () => {

        it("should get school using getSchool()", () => {
            // Arrange
            const school = "Harvard";
            // Act
            const intern = new Intern("Aku", 666, "aku@test.com", school); 
            const internSchool = intern.getSchool();
            // Assert
            expect(internSchool).toBe(school);
        });

        it("should get Intern role using getRole()", () => {
            // Arrange
            const role = "Intern";
            // Act
            const intern = new Intern ("Aku", 666, "aku@test.com", "Harvard"); 
            const internRole = intern.getRole();
            // Assert
            expect(internRole).toBe(role);
        });


    });

})
