describe("Comparador toBe", function () {
	it("Deve validar o uso do toBe", function () {

		var obj1 = {valor: true};
		var obj2 = {valor: true};

		expect(true).toBe(true); 		// retorna correto
		expect("Teste").toBe("Teste"); 	// retorna correto
		//expect(obj1).toBe(obj2);		// retorna erro, pois obj1 é diferente do obj2, apesar de terem o mesmo valor
		expect(obj1).not.toBe(obj2);	// retorna correto
	});
});