export abstract class BasePizza {
    abstract cost(): number;
}

export class VegPizza extends BasePizza {
    cost(): number {
        return 10;
    }
}

export class NonVegPizza extends BasePizza {
    cost(): number {
        return 15
    }
}