// structural pattern
interface Target {
    request(): void
  }
  
  class Adaptee {
    specificRequest() {
      console.log("Data from adaptee")
    }
  }
  
  
  class Adapter implements Target {
    constructor(private adaptee: Adaptee){}
    request() {
      this.adaptee.specificRequest()
    }
  }
  
  // usage
  const adaptee = new Adaptee()
  const adapter = new Adapter(adaptee)
  adapter.request();