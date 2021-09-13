import { Box, Heading } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

const Modules = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Box>
				<Heading>Modules</Heading>
			</Box>
		</motion.div>
	)
}

export default Modules