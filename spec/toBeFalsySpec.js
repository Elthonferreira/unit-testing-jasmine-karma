describe("Teste do toBeFalsy", function (){
	it("Deve demonstrar o uso do toBeFalsy", function () {

		/* Um valor será considerado falsy caso ele possua um valor
		igual a 'false', '0', '', 'undefined', 'null', ou 'NaN' */

		// Valores falsy
		expect(null).toBeFalsy();
		expect(undefined).toBeFalsy();
		expect('').toBeFalsy();
		expect(false).toBeFalsy();
		expect(NaN).toBeFalsy();
		expect(0).toBeFalsy();

		// Valor não falsy
		expect(true).not.toBeFalsy();

	});
});	