import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import i18next from 'i18next'
import { FiGlobe } from 'react-icons/fi'
import { languages } from '../../config/languages'

export const LanguagePicker = () => {
	const { language } = i18next
	let curLang = languages[language]

	return (
		<Menu autoSelect={false} placement='left-start'>
			<MenuButton
				as={Button}
				colorScheme='gray'
				variant='outline'
				leftIcon={<FiGlobe />}
			>
				{curLang.name}
			</MenuButton>
			<MenuList>
				{Object.keys(languages).map((lang) => (
					<MenuItem key={lang} onClick={() => i18next.changeLanguage(lang)}>
						{languages[lang].name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
