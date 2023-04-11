describe("Teste do afterAll", function () {

	var contador = 0;

	beforeAll(function () { // executa antes de TODOS testes
		contador = 10;
	});

	afterAll(function () {
		contador = 0;
		//console.log("afterAll: " + contador);
	});

	it("Deve garantir valor 10 para o contator", function () {
		//console.log("Teste 1: " + contador);
		expect(contador).toEqual(10);
	});

	/* it("Deve garantir valor 12 para o contator", function () {
		console.log("Teste 1: " + contador);
		expect(contador).toEqual(12);
	}); */ // MESMO ERRO, ACESSANDO TESTE DE BAIXO ANTES DO DE CIMA AS VEZES
});