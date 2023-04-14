describe("Teste do afterEach", function () {

	var contador = 0;

	beforeEach(function () { // executa antes de CADA teste
		contador++;
	});

	afterEach(function () { // executa após CADA teste
		contador = 0;
	});

	it("Deve garantir valor 1 para o contador", function () {
		//console.log("Teste 1: " + contador);
		expect(contador).toEqual(1);
	});

	it("Deve garantir valor 1 para o contador", function () {
		//console.log("Teste 2: " + contador);
		expect(contador).toEqual(1);
	});

});