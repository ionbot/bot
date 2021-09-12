import { RealSync } from '@realsync/react'

const { NODE_ENV } = process.env

const HOST =
	NODE_ENV === 'development'
		? process.env.REACT_APP_HOST || 'http://10.0.0.18:4337'
		: window.location.hostname

const realsync = new RealSync(HOST)
export default realsync
