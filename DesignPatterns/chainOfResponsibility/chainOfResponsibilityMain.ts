import { ErrorLogger, InfoLogger } from "./chainOfResponsibility"

function main() {
    const logger = new InfoLogger(new ErrorLogger(null))
    logger.log('ERROR', "ERROR OCCURED")
}

main()