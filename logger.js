const fs = require('fs');
const path = require('path');
const winston = require('winston');
const { format } = require('winston');

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const transport = new winston.transports.File({
    filename: path.join(logDirectory, 'combined.log'),
    maxsize: 5 * 1024 * 1024,
    maxFiles: '10d',
    tailable: true,
    zippedArchive: true
});

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [transport]
});

module.exports = logger;
