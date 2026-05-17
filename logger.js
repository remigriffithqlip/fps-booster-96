const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json, prettyPrint } = format;

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const createLogFile = () => {
    return new transports.File({
        filename: path.join(logDirectory, 'app.log'),
        frequency: 'daily',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
    });
};

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        createLogFile(),
        new transports.Console({
            format: prettyPrint()
        })
    ]
});

module.exports = logger;