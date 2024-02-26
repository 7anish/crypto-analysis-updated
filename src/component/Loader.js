import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Box
      w={'full'}
      h={'80vh'}
      display={'grid'}
      placeContent={'center'}
    >
      <Spinner size={'xl'}
        color='purple.600' />
    </Box>
  )
}

export default Loader