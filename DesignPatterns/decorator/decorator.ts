import { BasePizza } from "./base";

export abstract class PizzaDecorator extends BasePizza {
}

export class ExtraCheeseDecorator extends PizzaDecorator {
    basePizza: BasePizza
    constructor(basePizza: BasePizza) {
        super();
        this.basePizza = basePizza;
    }
    cost(): number {
       return this.basePizza.cost()+5;
    }
}
export class PaneerDecorator extends PizzaDecorator {
    basePizza: BasePizza
    constructor(basePizza: BasePizza) {
        super();
        this.basePizza = basePizza;
    }
    cost(): number {
       return this.basePizza.cost()+10;
    }
}