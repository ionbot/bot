import { Box, Heading } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

const Modules = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
		>
			<Box>
				<Heading>Modules</Heading>
			</Box>
		</motion.div>
	)
}

export default Modules
