import { useEffect, useState } from 'react'
import { Box, Spacer, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/layout'
import { Tag, useDisclosure } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import realsync from '../../../providers/realsync'
import { ModuleEditor } from './Editor'

const Home = () => {
	const [modules, setModules] = useState([])
	const moduleEditor = useDisclosure()
	const [activeModule, setActiveModule] = useState({})

	const { t } = useTranslation()

	const Fetch = async () => {
		const _modules = await realsync.service('ion/loaded-modules')
		setModules(_modules)
	}

	useEffect(() => {
		Fetch()
	}, [])

	return (
		<Box>
			<Heading>{t('common.modules')}</Heading>
			<SimpleGrid
				mt={8}
				columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }}
				spacing={4}
			>
				{modules.map((module) => {
					const { id } = module
					const name = t(`modules.${id}.name`)
					const info = t(`modules.${id}.info`)

					return (
						<Box
							key={id}
							p={4}
							bg='gray.50'
							rounded='2xl'
							transition='all 0.4s'
							pos='relative'
							cursor='pointer'
							willChange='transform'
							_hover={{
								transform: 'scale(0.99)',
								bg: 'gray.100',
							}}
							_active={{
								transform: 'scale(0.97)',
							}}
							onClick={() => {
								setActiveModule({ ...module, name, info })
								moduleEditor.onOpen()
							}}
							userSelect='none'
						>
							<Flex alignItems='center'>
								<Heading
									size='lg'
									bgGradient='linear(to-r, purple.400, red.200)'
									bgClip='text'
								>
									{name}
								</Heading>
								<Spacer />
							</Flex>
							<Text>{info}</Text>
						</Box>
					)
				})}
			</SimpleGrid>

			<ModuleEditor {...moduleEditor} module={activeModule} />
		</Box>
	)
}

export default Home
