describe("Teste do toBeGreaterThan", function (){
	it("Deve demonstrar o uso do toBeGreaterThan", function () {

		var pi = 3.1415;

		expect(4).toBeGreaterThan(pi);
		expect("5").toBeGreaterThan(pi);

		expect(3).not.toBeGreaterThan(pi);
	});
});	