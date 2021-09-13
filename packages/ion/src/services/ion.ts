import ion from '../providers/ion'

export const LoadedModules = () => {
	const modules = ion.getLoadedModules()
	return modules
}
