describe("Teste do toMatch", function () {

	it("Deve validar o uso do toMatch", function () {
		var texto = "teste com Jasmine";

		expect(texto).toMatch("Jasmine");
		expect(texto).toMatch(/jasmine/i);
		expect("12345-567").toMatch(/^\d{5}-\d{3}/);
	});
});