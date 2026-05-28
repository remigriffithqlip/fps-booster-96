class Logger {
    constructor(level) {
        this.level = level;
        this.logLevels = { error: 0, warn: 1, info: 2, debug: 3 };
    }

    log(message, level = 'info') {
        if (this.logLevels[level] <= this.logLevels[this.level]) {
            console.log(`[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`);
        }
    }

    error(message) {
        this.log(message, 'error');
    }

    warn(message) {
        this.log(message, 'warn');
    }

    info(message) {
        this.log(message, 'info');
    }

    debug(message) {
        this.log(message, 'debug');
    }
}

const logger = new Logger('info');
export default logger;
