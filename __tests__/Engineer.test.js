const Engineer = require("../lib/Engineer")

describe('Engineer', () =>{
    describe("initialization", () => {

        it("should set github using the constructor arguments", () => {
            // Arrange
            const github = "AkuCodes";
            // Act
            const engineer = new Engineer("Aku", 666, "aku@etest.com", github); 
            // Assert,
            expect(engineer.github).toBe(github);

        });

        
    });

    describe("Get Method", () => {

        it("should get github using getGithub()", () => {
            // Arrange
            const github = "AkuCodes";
            // Act
            const engineer = new Engineer("Aku", 666, "aku@test.com", github); 
            const engineerGithub = engineer.getGithub();
            // Assert
            expect(engineerGithub).toBe(github);
        });

        it("should get engineer role using getRole()", () => {
            // Arrange
            const role = "Engineer";
            // Act
            const engineer = new Engineer("Aku", 666, "aku@test.com", "AkuCodes"); 
            const engineerRole = engineer.getRole();
            // Assert
            expect(engineerRole).toBe(role);
        });


    });

})
