interface NotificationObserver {
    update(): void
}

class EmailNotificationObserver implements NotificationObserver {
    update(): void {
        console.log("Email notification")
    }

}
class PhoneNotificationObserver implements NotificationObserver {
    update(): void {
        console.log("Phone notification")
    }

}