import { IonModuleHandler } from '../handlers/Module'
import afk from './afk'
import ping from './ping'
import shortlink from './shortlink'
import Eval from './eval'
import spam from './spam'

export interface Meta {
	id: string
	fields: any
	examples?: any[]
}

interface IonModule {
	meta: Meta
	handlers: IonModuleHandler[]
}

let allModules: IonModule[] = [ping, shortlink, afk, Eval, spam]
export default allModules
