import fs from 'fs';
import path from 'path';
import winston from 'winston';

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = new winston.transports.File({
    filename: path.join(logDir, 'application.log'),
    maxSize: '20m',
    maxFiles: '5',
    tailable: true,
    zippedArchive: true,
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [transport],
});

export default logger;
