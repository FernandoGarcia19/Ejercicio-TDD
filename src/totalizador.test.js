import { totalizer_cantidad, totalizer_precio_item} from "./totalizador";

describe("Prueba de  totalizador", () => {
    it("Test 1: Deberia mostrar la cantidad dada", () => {
        expect(totalizer_cantidad(1)).toEqual(1);
    });
    it("Test 2: Deberia mostrar el precio dado", ()=> {
        expect(totalizer_precio_item(1)).toEqual(1);
    });
});