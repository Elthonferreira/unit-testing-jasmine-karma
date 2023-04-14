describe("Teste do toBeDefined", function (){
	it("Deve demonstrar o uso do toBeDefined", function () {
		var n1 = 10; 					// defined
		var n2;							// undefined
		var n3 = undefined;     		// undefined

		expect(n1).toBeDefined(); 		// defined
		expect(null).toBeDefined();		// defined
		expect(NaN).toBeDefined();		// defined

		expect(n2).not.toBeDefined();	// undefined
		expect(n3).not.toBeDefined();	// undefined
	});
});