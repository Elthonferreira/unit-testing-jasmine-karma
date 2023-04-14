describe("Teste do toContain", function (){
	it("Deve demonstrar o uso do toContain", function () {

		var texto = "Meu nome é Elthon"; 							
		var frutas = ["Laranja", "Banana", "Pêra", "Maçã", "Manga"];					

		expect(texto).toContain("Elthon");
		expect(texto).not.toContain("elthon"); // Case sensitive

		expect(frutas).toContain("Banana");
		expect(frutas).not.toContain("Uva");

	});
});	