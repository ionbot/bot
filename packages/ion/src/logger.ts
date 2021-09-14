import winston from 'winston'

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(winston.format.simple()),
	transports: [
		new winston.transports.File({ filename: `ion-error.log`, level: 'error' }),
	],
})

winston.addColors({
	error: 'red',
	info: 'cyan',
})

logger.add(
	new winston.transports.Console({
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.simple()
		),
	})
)

export default logger
