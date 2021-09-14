import 'colors'
import 'dotenv/config'
import path from 'path'
import http from 'http'
import Koa from 'koa'
import serve from 'koa-static'
import { connect } from 'mongoose'
import { RealSync } from '@realsync/server'
import { AuthService } from './services/auth'
import { UserProfile } from './services/user'
import { LoadedModules } from './services/ion'
import ion from './providers/ion'
import logger from './logger'

const { NODE_ENV } = process.env
const { version } = require('../package.json')

const dashboardDir = path.join(__dirname, 'ion-client')

const koa = new Koa()
const httpServer = http.createServer(koa.callback())
const realsync = new RealSync(httpServer, '*')

koa.use(serve(dashboardDir))

// services
realsync.register('auth/verify', AuthService)
realsync.register('user/profile', UserProfile)
realsync.register('ion/version', () => version)
realsync.register('ion/loaded-modules', LoadedModules)

export interface IonConfig {
	port: number
	mongoUri: string
}

const Ion = async (config?: IonConfig) => {
	const PORT = config?.port || 4337
	const MONGO_URI = config?.mongoUri || 'mongodb://localhost/ion'

	try {
		logger.info(`trying to connect to database ${MONGO_URI}`)
		await connect(MONGO_URI, {})
	} catch (err: any) {
		logger.error(err.toString())
		return
	}

	ion.init()
	httpServer.listen(PORT, () => {
		logger.info(`dashboard is running on port ${PORT}`)
	})
}

if (NODE_ENV === 'dev') Ion()

export { Ion }
