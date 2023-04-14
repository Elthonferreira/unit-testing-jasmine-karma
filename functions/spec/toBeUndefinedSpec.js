describe("Teste do toBeUndefined", function (){
	it("Deve demonstrar o uso do toBeUndefined", function () {
		var n1; 							// undefined
		var n2 = undefined;					// undefined
		var n3 = false;     				// defined

		expect(n1).toBeUndefined(); 		// undefined
		expect(n2).toBeUndefined();			// undefined

		expect(n3).not.toBeUndefined();		// defined
		expect(null).not.toBeUndefined();		// defined
	});
});