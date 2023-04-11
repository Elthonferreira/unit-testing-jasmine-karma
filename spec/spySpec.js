describe("Testes do objeto Spy", function () {

	var calculadora = {
		somar2Valores: function (n1, n2) {
			return n1 + n2;
		}, 
	};

	beforeAll(function () { // executa antes de TODOS testes
		spyOn(calculadora, "somar2Valores"); 
	});


	it("Deve possuir o método somar2Valores como não definido", function () {

		expect(calculadora.somar2Valores(1, 2)).toBeUndefined(); // método ficou não definido por conta do spy
	});
});