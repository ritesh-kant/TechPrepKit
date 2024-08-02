import { VegPizza } from "./base";
import { ExtraCheeseDecorator, PaneerDecorator } from "./decorator";

function main() {
    let pizza =    new ExtraCheeseDecorator(new VegPizza())
    let paneerPizza = new PaneerDecorator(pizza)
    console.log(paneerPizza.cost())
}

main()