import totalizer from "./totalizador";

describe("Prueba de  totalizador", () => {
    it("Test 1: Deberia mostrar la cantidad dada", () => {
        expect(totalizer(1)).toEqual(1);
    });
});