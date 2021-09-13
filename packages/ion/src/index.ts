import 'colors'
import http from 'http'
import { connect } from 'mongoose'
import { RealSync } from '@realsync/server'
import { AuthService } from './services/auth'

const PORT = process.env.PORT || 4337
const DB_URL = process.env.PORT || 'mongodb://localhost/ion'

connect(DB_URL, {})

const httpServer = http.createServer()
const realsync = new RealSync(httpServer, '*')

// services
realsync.register('auth/verify', AuthService)

httpServer.listen(PORT, () => {
	console.log(`listening on ${PORT}`.blue.bold)
})
