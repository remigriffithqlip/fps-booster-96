// logger.js

const logLevels = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

const logger = {
    log: (level, message) => {
        if (logLevels[level]) {
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] [${level}] ${message}`);
        } else {
            console.error('Invalid log level:', level);
        }
    },
    info: (message) => logger.log(logLevels.INFO, message),
    warn: (message) => logger.log(logLevels.WARN, message),
    error: (message) => logger.log(logLevels.ERROR, message),
};

export default logger;
