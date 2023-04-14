describe("Teste do toThrowError", function () {

	it("Deve validar o uso do toThrowError", function () {

		// Verifica se uma exceção é lançada por um método
		// Valida tipo, mensagem contida na exceção, suporta expressão regular

		var somar2Numeros = function (n1, n2) {
			if (n1 <= 0 || n2 <= 0) {
				throw new TypeError("Números devem ser maior que 0");
			}
			return n1 + n2;
		}

		expect(function() {somar2Numeros(0, 0)}).toThrowError();
		expect(function() {somar2Numeros(0, 0)}).toThrowError("Números devem ser maior que 0");
		expect(function() {somar2Numeros(0, 0)}).toThrowError(/maior que 0/);
		expect(function() {somar2Numeros(0, 0)}).toThrowError(TypeError);
		expect(function() {somar2Numeros(0, 0)}).toThrowError(TypeError, "Números devem ser maior que 0");

		expect(function() {somar2Numeros(1, 1)}).not.toThrowError(); // Não lança exceção
	});
});