describe("Paciente", function() {
  it ("deve calcular o imc", function() {

      var guilherme = new Paciente ("Guilherme", 28, 72, 1.82);

      expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
  });

it ("deve calcular a quantidade de batimentos do paciente", function(){

  var guilherme = new Paciente ("Guilherme", 28, 72, 1.82);
  expect(guilherme.batimentos()).toEqual(28 *365 * 24 * 60 * 80);
});

});