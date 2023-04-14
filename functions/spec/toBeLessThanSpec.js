describe("Teste do toBeLessThan", function (){
	it("Deve demonstrar o uso do toBeLessThan", function () {

		var pi = 3.1415;

		expect(3).toBeLessThan(pi);
		expect(3.5).not.toBeLessThan(pi);

	});
});	