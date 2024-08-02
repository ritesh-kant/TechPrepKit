"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaneerDecorator = exports.ExtraCheeseDecorator = exports.PizzaDecorator = void 0;
const base_1 = require("./base");
class PizzaDecorator extends base_1.BasePizza {
}
exports.PizzaDecorator = PizzaDecorator;
class ExtraCheeseDecorator extends PizzaDecorator {
    constructor(basePizza) {
        super();
        this.basePizza = basePizza;
    }
    cost() {
        return this.basePizza.cost() + 5;
    }
}
exports.ExtraCheeseDecorator = ExtraCheeseDecorator;
class PaneerDecorator extends PizzaDecorator {
    constructor(basePizza) {
        super();
        this.basePizza = basePizza;
    }
    cost() {
        return this.basePizza.cost() + 10;
    }
}
exports.PaneerDecorator = PaneerDecorator;
