import i18n from '../../../i18n'
import { ModuleHandler } from '../../handlers/Module'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

interface AFKConfig {
	status: boolean
	reason: string
}

const AFKCommand = new ModuleHandler(
	async (client, event, extras) => {
		/**
		 * Command Hanadler for AFK Module
		 */

		const [, reason] = extras.match
		const config: AFKConfig = extras.config

		if (!config.status) {
			// changes status-> true | sets afkAt-> current time

			event.message.edit({ text: i18n.__('modules.afk.started') })
			await extras.saveConf('status', true)
			await extras.saveConf('afkAt', new Date())
			await extras.saveConf('reason', reason)
		} else {
			await event.message.edit({ text: i18n.__('errors.alreadyAfk') })
		}
	},
	{
		pattern: /afk (.*)/,
		scope: 'all',
		mode: 'outgoing',
	}
)

const AFKHandler = new ModuleHandler(
	async (client, event, extras) => {
		const { status, afkAt, afkMessage, reason } = extras.config
		const isMentioned = event.message.mentioned
		if (!status || !isMentioned) return

		const timeAgo = new TimeAgo()
		let lastSeenTime = timeAgo.format(afkAt)

		let message = i18n.__(afkMessage || 'modules.afk.defaultAfkMsg', {
			lastSeen: lastSeenTime,
			reason,
		})

		await event.message.reply({ message, parseMode: 'markdown' })
		return
	},
	{
		pattern: /.*/,
		scope: ['group', 'private'],
		mode: 'incoming',
	}
)

const AFKRemover = new ModuleHandler(
	async (client, event, extras) => {
		const { status } = extras.config

		if (status) {
			await event.message.reply({
				message: i18n.__('modules.afk.noLongerAfk', {}),
			})
			extras.saveConf('status', false)
		}
	},
	{ pattern: /.*/, scope: ['group', 'private'], mode: 'outgoing' }
)

export default [AFKHandler, AFKCommand, AFKRemover]
