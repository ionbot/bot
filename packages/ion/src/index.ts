import 'colors'
import http from 'http'
import { RealSync } from '@realsync/server'

const PORT = process.env.PORT || 4337

const httpServer = http.createServer()
const realsync = new RealSync(httpServer)

// services

httpServer.listen(PORT, () => {
	console.log(`listening on ${PORT}`.blue.bold)
})
