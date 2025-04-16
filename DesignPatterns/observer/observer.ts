// Observer design pattern (behavioral)
interface Observer {
    update(data: string): void;
  }
  
  interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(data: string): void;
  }
  
  class NewsAgency implements Subject {
    private observer: Observer[] = [];
  
    subscribe(observer: Observer): void {
      this.observer.push(observer)
    }
    unsubscribe(observer: Observer): void {
      this.observer = this.observer.filter(obj => obj !== observer)
    }
    notify(data: string): void {
      this.observer.forEach(eachObserver => eachObserver.update(data))
    }
  }
  
  class EmailSubscriber implements Observer {
    update(data: string) {
      console.log(data)
    }
  }
  
  const news = new NewsAgency();
  
  const subs1 = new EmailSubscriber();
  
  news.subscribe(subs1)
  
  news.notify("new headline")
  news.notify("old headline")