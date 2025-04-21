// creational pattern

class Logger {
    private static logger: Logger;
    private constructor(){}
    static getInstance() {
      if(Logger.logger){
        return this.logger
      }
      this.logger = new Logger()
      return this.logger
    }
  
    log(message:string) {
      console.log(message)
    }
  }
  
  // usage
  const logger1 = Logger.getInstance()
  logger1.log("hello")
  
  const logger2 = Logger.getInstance()
  logger2.log("bye")
  
  console.log(logger1 === logger2)