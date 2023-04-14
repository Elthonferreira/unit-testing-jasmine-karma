describe("Teste do beforeEach", function () {

	var contador = 0;

	beforeEach(function () { // executa antes de CADA teste
		contador++;
	});

	it("Deve incrementar o contator para 1", function () {
		//console.log("Teste 1: " + contador);
		expect(contador).toEqual(1);
	});

	xit("Deve incrementar o contator para 2", function () {
		console.log("Teste 2: " + contador);
		expect(contador).toEqual(2);
	}); 

	// Estranho porque as vezes executa o teste 2 antes do teste 1
});