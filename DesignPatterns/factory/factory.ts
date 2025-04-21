// creational pattern

interface Shape {
    draw(): void
  }
  
  class CircleShape implements Shape {
    draw(): void {
      console.log("drawing circle")
    }
  }
  
  
  class RectangleShape implements Shape {
    draw(): void {
      console.log("drawing rectangle")
    }
  }
  
  class ShapeFactory {
    static getShape(shape: string){
      if(shape === "circle"){
        return new CircleShape()
      } else if(shape == "rectangle"){
        return new RectangleShape()
      } else {
        throw new Error("no shape found")
      }
    }
  }
  
  // usage
  const shape1 = ShapeFactory.getShape("circle")
  shape1.draw()
  
  const shape2 = ShapeFactory.getShape("rectangle")
  shape2.draw()