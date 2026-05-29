class Logger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${message}`);
        this.outputToConsole(`[${timestamp}] ${message}`);
    }

    outputToConsole(message) {
        if (typeof console === 'object' && console.log) {
            console.log(message);
        }
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
    }
}

const logger = new Logger();
export default logger;