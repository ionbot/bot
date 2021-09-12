import 'colors'
import http from 'http'
import { RealSync } from '@realsync/server'
import { AuthService } from './controllers/auth'

const PORT = process.env.PORT || 4337

const httpServer = http.createServer()
const realsync = new RealSync(httpServer, '*')

// services
realsync.register('auth/verify', AuthService)

httpServer.listen(PORT, () => {
	console.log(`listening on ${PORT}`.blue.bold)
})
