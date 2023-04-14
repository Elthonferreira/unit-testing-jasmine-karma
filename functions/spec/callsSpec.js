describe("Testes dos calls", function () {

	var calculadora = {
		somar: function (n1, n2) {
			return n1 + n2;
		}, 

		subtrair: function (n1,  n2) {
			return n1 - n2;
		}, 

		multiplicar: function (n1, n2) {
			return n1 * n2;
		}, 

		divisao: function (n1, n2) {
			return n1 / n2;
		}, 

		somaMais1: function (n1, n2) {
			return n1 + n2 + 1;
		} 
	};

	beforeAll(function () { // executa antes de TODOS testes
		spyOn(calculadora, "somar"); 
		spyOn(calculadora, "subtrair");
		spyOn(calculadora, "multiplicar");
		spyOn(calculadora, "divisao");
		spyOn(calculadora, "somaMais1").and.returnValue(10); 
	});


	it("Deve demonstrar o uso do calls.any", function () {
		calculadora.somar(2, 2);
		expect(calculadora.somar.calls.any()).toBeTruthy(); // tem a mesma função do toHaveBeenCalled
	});

	it("Deve demonstrar o uso do calls.count", function () {
		calculadora.subtrair(2, 2);
		calculadora.subtrair(2, 2);

		expect(calculadora.subtrair.calls.count()).toEqual(2); // tem a mesma função do toHaveBeenCalledTimes
	});

	it("Deve demonstrar o uso do calls.argsFor", function () {
		calculadora.multiplicar(1, 1);
		calculadora.multiplicar(2, 2);

		expect(calculadora.multiplicar.calls.argsFor(0)).toEqual([1, 1]); // tem a mesma função do toHaveBeenCalledWith
		expect(calculadora.multiplicar.calls.argsFor(1)).toEqual([2, 2]); // tem a mesma função do toHaveBeenCalledWith
	});

	it("Deve demonstrar o uso do calls.allArgs", function () {
		calculadora.divisao(4, 2);
		calculadora.divisao(2, 2);

		expect(calculadora.divisao.calls.allArgs()).toEqual([[4, 2], [2, 2]]); // tem a mesma função do toHaveBeenCalledTimes
	});

	it("Deve demonstrar o uso do calls.all/mostRecent/first/reset", function () {
		calculadora.somaMais1(5, 2);
		calculadora.somaMais1(3, 3);
		calculadora.somaMais1(5, 5);

		var retorno = calculadora.somaMais1.calls.all();
		var retornoMostRecent = calculadora.somaMais1.calls.mostRecent();
		var retornoFirst = calculadora.somaMais1.calls.first();

		expect(retorno[1].object).toEqual(calculadora);
		expect(retorno[1].args).toEqual([3, 3]); 
		expect(retorno[1].returnValue).toEqual(10); 

		expect(retornoMostRecent.object).toEqual(calculadora); 
		expect(retornoMostRecent.args).toEqual([5, 5]); 
		expect(retornoMostRecent.returnValue).toEqual(10); 

		expect(retornoFirst.object).toEqual(calculadora); 
		expect(retornoFirst.args).toEqual([5, 2]); 
		expect(retornoFirst.returnValue).toEqual(10); 


		expect(calculadora.somaMais1.calls.any()).toBeTruthy();

		calculadora.somaMais1.calls.reset();

		expect(calculadora.somaMais1.calls.any()).toBeFalsy();
	});
});