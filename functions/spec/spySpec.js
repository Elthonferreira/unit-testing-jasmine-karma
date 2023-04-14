describe("Testes do objeto jasmine.createSpy e Obj", function () {

	var somar;			// createSpy
	var Calculadora;	// createSpyObj

	beforeAll(function () { // executa antes de TODOS testes
		somar = jasmine.createSpy("somar");
		Calculadora = jasmine.createSpyObj("Calculadora", ["somar", "subtrair"]);

		Calculadora.somar.and.returnValue(5);
	});


	it("Deve demonstar o uso do jasmine.createSpy e Obj", function () {
		var retorno = Calculadora.somar(1, 2);

		expect(Calculadora.somar).toHaveBeenCalled(); 
		expect(Calculadora.somar).toHaveBeenCalledWith(1, 2); 
		expect(retorno).toEqual(5);
	});
});