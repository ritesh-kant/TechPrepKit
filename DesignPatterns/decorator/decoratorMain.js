"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const decorator_1 = require("./decorator");
function main() {
    let pizza = new decorator_1.ExtraCheeseDecorator(new base_1.VegPizza());
    let paneerPizza = new decorator_1.PaneerDecorator(pizza);
    console.log(paneerPizza.cost());
}
main();
