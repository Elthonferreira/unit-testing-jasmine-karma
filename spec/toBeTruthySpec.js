describe("Teste do toBeTruthy", function (){
	it("Deve demonstrar o uso do toBeTruthy", function () {

		/* Um valor será considerado válido caso ele possua um valor
		diferente de 'false', '0', '', 'undefined', 'null', ou 'NaN' */

		var n1 = 10; 							
		var n2 = undefined;					
		var n3 = 0;     
		var n4 = '';
		var n5 = null;
		var n6 = NaN;
		var n7;				

		// valores válidos
		expect(n1).toBeTruthy();
		expect("teste").toBeTruthy();
		expect(true).toBeTruthy();

		// valores inválidos
		expect(n2).not.toBeTruthy();
		expect(n3).not.toBeTruthy();
		expect(n4).not.toBeTruthy();
		expect(n5).not.toBeTruthy();
		expect(n6).not.toBeTruthy();
		expect(n7).not.toBeTruthy();
		expect(false).not.toBeTruthy();

	});
});	