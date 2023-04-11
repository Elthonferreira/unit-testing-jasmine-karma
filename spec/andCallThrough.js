describe("Testes do objeto andCallThrough", function () {

	var calculadora = {
		somar2Valores: function (n1, n2) {
			return n1 + n2;
		}, 

		subtrair2Valores: function (n1, n2) {
			return n1 - n2;
		}, 

		multiplicar2Valores: function (n1, n2) {
			return n1 * n2;
		}, 

		dividir2Valores: function (n1, n2) {
			return n1 / n2;
		}, 

		potencia2: function (n) {
			return n * n;
		}
	};

	beforeAll(function () { // executa antes de TODOS testes
		spyOn(calculadora, "somar2Valores").and.callThrough(); 
		spyOn(calculadora, "subtrair2Valores").and.returnValue(5); 
		spyOn(calculadora, "multiplicar2Valores").and.returnValues(5, 10, 15); 
		spyOn(calculadora, "dividir2Valores").and.callFake(function (n1, n2) { // callFake define uma nova implementação para um método
			return n1 - n2;
		}); 
		spyOn(calculadora, "potencia2").and.throwError("erro"); 
	});


	it("Deve executar o método somar original", function () {
		expect(calculadora.somar2Valores(1, 2)).toEqual(3); 
	});

	it("Deve executar o método subtrair e retornar o valor 5", function () {
		expect(calculadora.subtrair2Valores(2, 1)).toEqual(5); // mesmo passando parâmetros 'incorretos', o teste da certo, porque ele pega o and.returnValue do spyOn
	});

	it("Deve executar o método multiplicar e retornar os valores passados", function () {
		expect(calculadora.multiplicar2Valores(1, 1)).toEqual(5); 
		expect(calculadora.multiplicar2Valores(1, 1)).toEqual(10); 
		expect(calculadora.multiplicar2Valores(1, 1)).toEqual(15); 
		expect(calculadora.multiplicar2Valores(1, 1)).toBeUndefined();
	});

	it("Deve transformar o método dividir em subtração", function () {
		expect(calculadora.dividir2Valores(5, 2)).toEqual(3); 
	});

	it("Deve lançar um erro ao chamar a função potencia2", function () {
		expect(function () { calculadora.potencia2(2).throwError("erro"); }); 
	});
});