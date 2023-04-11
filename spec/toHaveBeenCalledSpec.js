describe("Testes do objeto toHaveBeenCalled", function () {

	var calculadora = {
		somar2Valores: function (n1, n2) {
			return n1 + n2;
		}, 
	};

	beforeAll(function () { // executa antes de TODOS testes
		spyOn(calculadora, "somar2Valores"); 
	});


	xit("Deve chamar o método somar2Valores ao menos uma vez", function () {
		expect(calculadora.somar2Valores).not.toHaveBeenCalled();
		calculadora.somar2Valores(2, 3);
		expect(calculadora.somar2Valores).toHaveBeenCalled();
	});


	it("Deve chamar o método somar2Valores duas vezes", function () {
		calculadora.somar2Valores(2, 3);
		calculadora.somar2Valores(2, 3);
		expect(calculadora.somar2Valores).toHaveBeenCalledTimes(2);
	});

	it("Deve chamar o método com os parâmetros válidos", function () {
		calculadora.somar2Valores(2, 3);
		calculadora.somar2Valores(2, 2);
		expect(calculadora.somar2Valores).toHaveBeenCalledWith(2, 3);
	});
});