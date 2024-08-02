"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainOfResponsibility_1 = require("./chainOfResponsibility");
function main() {
    const logger = new chainOfResponsibility_1.InfoLogger(new chainOfResponsibility_1.ErrorLogger(null));
    logger.log('ERROR', "ERROR OCCURED");
}
main();
