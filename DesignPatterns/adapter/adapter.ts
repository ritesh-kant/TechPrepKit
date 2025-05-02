// Structural pattern
class OldPrinter {
  printOld(text: string) {
    console.log(`Old Printer: ${text}`);
  }
}

// Target interface
class NewPrinterInterface {
  print(text: string) {}
}

// Adapter
class PrinterAdapter extends NewPrinterInterface {
  constructor(private oldPrinter: OldPrinter) {
    super();
    this.oldPrinter = oldPrinter;
  }

  print(text: string) {
    this.oldPrinter.printOld(text);
  }
}

// Client code
const oldPrinter = new OldPrinter();
const adaptedPrinter = new PrinterAdapter(oldPrinter);

adaptedPrinter.print("Hello from adapter!");