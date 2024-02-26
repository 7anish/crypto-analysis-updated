import { Alert, AlertIcon, HStack } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <HStack w={'full'} h={'80vh'} alignItems={'End'} justifyContent={'center'}>
      <Alert m={'1vw'} w={'80%'} status='error'>
        <AlertIcon />
        Error while fetching Data
      </Alert>
    </HStack>
  )
}

export default Error
