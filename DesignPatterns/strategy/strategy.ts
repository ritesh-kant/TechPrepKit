// Behavioral design pattern
interface PaymentStrategy {
  pay(data:string): void
}

class CreditCardStrategy implements PaymentStrategy {
  pay(data: string){
    console.log("paid through creditcard", data)
  }
}

class NetBankingStrategy implements PaymentStrategy {
  pay(data: string){
    console.log("paid through netbanking", data)
  }
}

class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;
  constructor(paymentStrategy: PaymentStrategy){
    this.paymentStrategy = paymentStrategy
  }

  setStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  checkout(amount: string){
    this.paymentStrategy.pay(amount)
  }
}

const payment = new PaymentProcessor(new CreditCardStrategy())
payment.checkout("500")