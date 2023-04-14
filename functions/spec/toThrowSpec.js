describe("Teste do toThrow", function () {

	it("Deve validar o uso do toThrow", function () {

		// Verifica se uma exceção é lançada por um método
		// Não realiza a validação em detalhe, apenas certifica que um erro ocorreu na execução da função
		
		function multiplicarPor10() { // função com erro (variável 'numero' não está definida)
			numero * 10;
		}

		function somar2Numeros(n1, n2) { // função correta, não lança exceção 
			return n1 + n2;
		}

		expect(multiplicarPor10).toThrow();
		expect(somar2Numeros).not.toThrow();
	});
});