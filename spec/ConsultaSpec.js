describe("Consulta", function() {
    
    var guilherme;
    
    beforeEach(function(){
        guilherme = new PacienteBuilder().comPeso(50).comIdade(35).constroi();
    });
    describe ("Consultas do tipo retorno", function(){
      it("nao deve cobrar nada se for um retorno", function(){
        var consulta = new Consulta(guilherme, [], true, true);

        expect(consulta.preco()).toEqual(0);
      });

    });
    
    it("deve cobrar 25 por cada procedimento comum", function(){
        var consulta = new Consulta(guilherme, ["proc1","proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve cobrar um preco especifico dependendo do procedimento", function(){
        var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });

    it("deve cobrar 2 vezes 25 por cada procedimento comum em uma consulta particular", function(){
        var consulta = new Consulta(guilherme, ["proc1","proc2"], true, false);

        expect(consulta.preco()).toEqual(2 * 50);
    });

    it("deve multiplicar por 2 o preco especifico dependendo do procedimento em uma consulta particular", function(){
        var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], true, false);

        expect(consulta.preco()).toEqual((25 + 55 + 25 + 32) * 2);
    });
});