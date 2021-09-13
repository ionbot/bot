import 'colors'
import http from 'http'
import { connect } from 'mongoose'
import { RealSync } from '@realsync/server'
import { AuthService } from './services/auth'
import { UserProfile } from './services/user'
import { LoadedModules } from './services/ion'

const { version } = require('../package.json')

const PORT = process.env.PORT || 4337
const DB_URL = process.env.DB_URL || 'mongodb://localhost/ion'

connect(DB_URL, {})

const httpServer = http.createServer()
const realsync = new RealSync(httpServer, '*')

// services
realsync.register('auth/verify', AuthService)
realsync.register('user/profile', UserProfile)
realsync.register('ion/version', () => version)
realsync.register('ion/loaded-modules', LoadedModules)

httpServer.listen(PORT, () => {
	console.log(`listening on ${PORT}`.blue.bold)
})
