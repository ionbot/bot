import { RealSync } from '@realsync/react'

const { NODE_ENV } = process.env

const HOST =
	NODE_ENV === 'development'
		? process.env.REACT_APP_HOST || 'http://localhost:4337'
		: window.location.host

const realsync = new RealSync(HOST)
export default realsync
