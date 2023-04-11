describe("Teste do beforeAll", function () {

	var contador = 0;

	beforeAll(function () { // executa antes de TODOS testes
		contador = 10;
	});

	beforeEach(function () {
		contador++;
	});

	it("Deve garantir valor 11 para o contator", function () {
		//console.log("Teste 1: " + contador);
		expect(contador).toEqual(11);
	});

	xit("Deve garantir valor 12 para o contator", function () {
		console.log("Teste 1: " + contador);
		expect(contador).toEqual(12);
	});  // MESMO ERRO, ACESSANDO TESTE DE BAIXO ANTES DO DE CIMA AS VEZES
});