"use strict";
class IphoneStockObservable {
    constructor() {
        this.observers = [];
        this.stock = 0;
    }
    add(observer) {
        this.observers.push(observer);
    }
    remove(observers) {
        // throw new Error("Method not implemented.");
    }
    set(stock) {
        this.stock = stock;
        this.notify();
    }
    notify() {
        for (let eachObserver of this.observers) {
            eachObserver.update();
        }
    }
}
