"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVegPizza = exports.VegPizza = exports.BasePizza = void 0;
class BasePizza {
}
exports.BasePizza = BasePizza;
class VegPizza extends BasePizza {
    cost() {
        return 10;
    }
}
exports.VegPizza = VegPizza;
class NonVegPizza extends BasePizza {
    cost() {
        return 15;
    }
}
exports.NonVegPizza = NonVegPizza;
