"use strict";
function main() {
    let observable = new IphoneStockObservable();
    let emailObserver = new EmailNotificationObserver();
    let phoneObserver = new PhoneNotificationObserver();
    observable.add(emailObserver);
    observable.add(phoneObserver);
    observable.set(10);
}
