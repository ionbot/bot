import 'colors'
import 'dotenv/config'
import path from 'path'
import http from 'http'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { RealSync } from '@realsync/server'
import { AuthService } from './services/auth'
import { UserProfile } from './services/user'
import { LoadedModules } from './services/ion'
import ion from './providers/ion'
import logger from './logger'

const { NODE_ENV } = process.env
const { version } = require('../package.json')

const server = express()
const dashboardDir = path.join(__dirname, 'ion-client')

const httpServer = http.createServer(server)
const realsync = new RealSync(httpServer, '*')

server.use(cors())
server.use(express.static(dashboardDir))
server.get('*', (req, res) => {
	if (NODE_ENV === 'dev') {
		res.end('development mode')
		return
	}

	res.sendFile(dashboardDir + '/index.html')
})

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
