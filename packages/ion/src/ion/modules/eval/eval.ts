import { ModuleHandler } from '../../handlers/Module'
import { NodeVM, VMScript } from 'vm2'

const Eval = new ModuleHandler(
	async (client, event, extras) => {
		let message = ''
		const vm = new NodeVM({
			console: 'inherit',
			sandbox: { event },
			require: {
				external: true,
				builtin: ['fs', 'path', 'process', 'os'],
			},
		})

		const [, code] = extras.match

		try {
			const script = new VMScript(`module.exports = ${code}`)
			let result = vm.run(script)

			if (typeof result === 'object') {
				result = JSON.stringify(result, null, 2)
			}

			result = String(result)

			message = `Code: \`${code}\`\n\nResult: \`${result}\``
		} catch (err: any) {
			message = `Code: \`${code}\`\n\nError: \`${err.toString()}\``
		}

		await event.message.edit({ text: message, parseMode: 'markdown' })
	},
	{ pattern: /eval (.*)/ }
)

export default [Eval]
