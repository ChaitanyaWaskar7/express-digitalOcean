import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format

// custome format to console logging the errors

const comsoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({ level, message, timestamp }) => {
        return `${level} : ${message}`
    })
);

const logger = createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp(),
        json()
    ),
    transports: [
        new transports.Console({
            format:comsoleLogFormat
        }),
        new transports.File({filename:'app.log'})
    ],
});

export default logger;

