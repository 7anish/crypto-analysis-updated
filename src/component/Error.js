import { Alert, AlertIcon, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({er}) => {
  return (
    <HStack w={'full'} h={'80vh'} alignItems={'End'} justifyContent={'center'}>
      <Alert m={'1vw'} w={'80%'} status='error'>
        <AlertIcon />
        Error while Fetching Data "You've exceeded the Rate Limit"
      </Alert>
    </HStack>
  )
}

export default Error
