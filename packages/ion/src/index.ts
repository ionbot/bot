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

const { NODE_ENV } = process.env
const { version } = require('../package.json')

const PORT = process.env.PORT || 4337
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/ion'
const dashboardDir = path.join(__dirname, 'ion-client')

connect(MONGO_URI, {})

const koa = new Koa()
const httpServer = http.createServer(koa.callback())
const realsync = new RealSync(httpServer, '*')

koa.use(serve(dashboardDir))

// services
realsync.register('auth/verify', AuthService)
realsync.register('user/profile', UserProfile)
realsync.register('ion/version', () => version)
realsync.register('ion/loaded-modules', LoadedModules)

const main = () => {
	ion.init()
	httpServer.listen(PORT, () => {
		console.log(`listening on ${PORT}`.blue.bold)
	})
}

if (NODE_ENV === 'dev') main()

export default main
