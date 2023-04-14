describe("Teste do toEqual", function () {
	it("Deve validar o uso do toEqual", function () {

		var obj1 = {valor: true};
		var obj2 = {valor: true};

		expect(true).toEqual(true); // retorna correto
		expect(obj1).toEqual(obj2);	// retorna correto, diferente do toBe, ele verifica o valor do objeto
	});
});