// Enum defining the different product types
enum ProductType {
    Coke,
    Chips,
    Candy,
    Water,
    Snacks,
  }
  
  // Class representing a product
  class Product {
    constructor(
      public type: ProductType,
      public name: string,
      public price: number,
      public quantity: number
    ) {}
  }
  // Define the interface for Vending Machine States
  interface VendingMachineState {
    selectProduct(productType: ProductType): void;
    dispense(amount: number): string;
    addProduct(product: Product): void;
  }
  
  // Implement Idle State
  class IdleState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}
  
    selectProduct(productType: ProductType): void {
      const product = this.vendingMachine.getProduct(productType);
      if (!product) {
        this.vendingMachine.setState(new NoChangeState(this.vendingMachine));
      } else if (product.quantity === 0) {
        this.vendingMachine.setState(new OutOfStockState(this.vendingMachine));
      } else {
        this.vendingMachine.setSelectedProduct(product);
        this.vendingMachine.setState(new SelectingState(this.vendingMachine));
      }
    }
  
    dispense(amount: number): string {
      return 'Please select a product first.';
    }
  
    addProduct(product: Product): void {
      this.vendingMachine.addProduct(product);
    }
  }
  
  // Implement Selecting State
  class SelectingState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}
  
    selectProduct(productType: ProductType): void {
      this.vendingMachine.setState(new NoChangeState(this.vendingMachine));
    }
  
    dispense(amount: number): string {
      const selectedProduct = this.vendingMachine.getSelectedProduct();
      if (!selectedProduct) return 'Please select a product first.';
  
      if (amount < selectedProduct.price) {
        this.vendingMachine.setState(
          new InsufficientAmountState(this.vendingMachine)
        );
        return 'Insufficient amount.';
      }
  
      selectedProduct.quantity--;
      this.vendingMachine.setState(new DispensingState(this.vendingMachine));
      return `You bought ${selectedProduct.name}. Your change is ${(
        amount - selectedProduct.price
      ).toFixed(2)}`;
    }
  
    addProduct(product: Product): void {
      this.vendingMachine.addProduct(product);
    }
  }
  
  // Implement Dispensing State
  class DispensingState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}
  
    selectProduct(productType: ProductType): void {
      this.vendingMachine.setState(new NoChangeState(this.vendingMachine));
    }
  
    dispense(amount: number): string {
      return 'Please wait, dispensing your product.';
    }
  
    addProduct(product: Product): void {
      this.vendingMachine.setState(new NoChangeState(this.vendingMachine));
      this.vendingMachine.addProduct(product);
    }
  }
  
  // Implement other states: NoChangeState, InsufficientAmountState, OutOfStockState
  
  // Define VendingMachine class utilizing the states
  class VendingMachine {
    private state: VendingMachineState;
    private selectedProduct: Product | null = null;
    private products: Product[];
  
    constructor(initialProducts: Product[]) {
      this.products = initialProducts;
      this.state = new IdleState(this);
    }
  
    setState(state: VendingMachineState): void {
      this.state = state;
    }
  
    selectProduct(productType: ProductType): void {
      this.state.selectProduct(productType);
    }
  
    dispense(amount: number): string {
      return this.state.dispense(amount);
    }
  
    addProduct(product: Product): void {
      this.state.addProduct(product);
    }
  
    getProduct(productType: ProductType): Product | undefined {
      return this.products.find((product) => product.type === productType);
    }
  
    setSelectedProduct(product: Product): void {
      this.selectedProduct = product;
    }
  
    getSelectedProduct(): Product | null {
      return this.selectedProduct;
    }
  }
  
  // Define Product and enums (same as before)
  
  // Example usage
  const initialProducts = [
    new Product(ProductType.Coke, 'Coke', 1.5, 10),
    // Add other products here
  ];
  
  const vendingMachine = new VendingMachine(initialProducts);
  vendingMachine.selectProduct(ProductType.Coke);
  console.log(vendingMachine.dispense(2.5));
  // Handle other operations as needed
  