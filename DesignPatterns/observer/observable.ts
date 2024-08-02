interface StockObservable {
    add(observers: NotificationObserver): void;
    remove(observers: NotificationObserver): void;
    set(stock: number): void;
    notify(): void;
}

class IphoneStockObservable implements StockObservable {
    private observers: NotificationObserver[] =[]
    stock = 0;
    add(observer: NotificationObserver): void {
        this.observers.push(observer)
    }
    remove(observers: NotificationObserver): void {
        // throw new Error("Method not implemented.");
    }
    set(stock: number): void {
        this.stock = stock
        this.notify();
    }
    notify(): void {
        for(let eachObserver of this.observers) {
            eachObserver.update();
        }
    }

}