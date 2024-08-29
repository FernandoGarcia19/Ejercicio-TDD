import { totalizer_cantidad, totalizer_precio_item, totalizer_impuesto, precio_neto} from "./totalizador";

describe("Prueba de  totalizador", () => {
    it("Test 1: Deberia mostrar la cantidad dada", () => {
        expect(totalizer_cantidad(1)).toEqual(1);
    });
    it("Test 2: Deberia mostrar el precio dado", ()=> {
        expect(totalizer_precio_item(1)).toEqual(1);
    });
    it("Test 3: Deberia mostrar el Estado dado como CA", ()=> {
        expect(totalizer_impuesto("CA")).toEqual("CA");
    });
    it("Test 4: Deberia retornar 2x3 = 6 ", ()=> {
        expect(precio_neto(2, 3)).toEqual(6);
    });
});