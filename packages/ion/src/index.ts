import 'colors'
import path from 'path'
import http from 'http'
import Koa from 'koa'
import serve from 'koa-static'
import { connect } from 'mongoose'
import { RealSync } from '@realsync/server'
import { AuthService } from './services/auth'
import { UserProfile } from './services/user'
import { LoadedModules } from './services/ion'

const { version } = require('../package.json')

const PORT = process.env.PORT || 4337
const DB_URL = process.env.DB_URL || 'mongodb://localhost/ion'
const dashboardDir = path.join(__dirname, 'ion-client')

connect(DB_URL, {})

const koa = new Koa()
const httpServer = http.createServer(koa.callback())
const realsync = new RealSync(httpServer, '*')

koa.use(serve(dashboardDir))

// services
realsync.register('auth/verify', AuthService)
realsync.register('user/profile', UserProfile)
realsync.register('ion/version', () => version)
realsync.register('ion/loaded-modules', LoadedModules)

httpServer.listen(PORT, () => {
	console.log(`listening on ${PORT}`.blue.bold)
})
