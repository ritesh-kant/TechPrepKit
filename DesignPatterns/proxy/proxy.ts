interface Service {
    fetchData(): string;
  }
  
  // Real service (expensive or protected)
  class RealService implements Service {
    fetchData(): string {
      return "Real data from the server";
    }
  }
  
  // Proxy
  class ServiceProxy implements Service {
    private realService: RealService | null = null;
  
    fetchData(): string {
      if (!this.realService) {
        console.log("Initializing real service...");
        this.realService = new RealService();
      }
      console.log("Logging: fetchData was called");
      return this.realService.fetchData();
    }
  }
  
  // Client code
  const proxy = new ServiceProxy();
  console.log(proxy.fetchData()); // Lazy initialization + logging