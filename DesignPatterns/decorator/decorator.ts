// Structual design pattern
interface Pizza {
    cost(): number
    description(): string
  }
  
  class PizzaBase implements Pizza {
    cost(): number {
      return 5;
    }
    description(): string {
      return "Basic pizza"
  
    }
  }
  
  abstract class PizzaDecorator implements Pizza {
    constructor(protected pizza: Pizza) { }
    abstract cost(): number
    abstract description(): string
  }
  
  class ExtraCheeseDecorator extends PizzaDecorator {
    cost(): number {
      return this.pizza.cost() + 5
    }
    description(): string {
      return this.pizza.description() + " ,cheese"
    }
  }
  
  class PaneerDecorator extends PizzaDecorator {
    cost(): number {
      return this.pizza.cost() + 3
    }
    description(): string {
     return this.pizza.description() + " ,paneer"
    }
  
  }
  
  // Usage
  let pizza = new PizzaBase();
  console.log(pizza.description()+"_"+pizza.cost())
  
  pizza = new ExtraCheeseDecorator(pizza)
  console.log(pizza.description()+"_"+pizza.cost())
  
  pizza = new PaneerDecorator(pizza)
  console.log(pizza.description()+"_"+pizza.cost())