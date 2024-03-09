import {Heading, Text, Stack, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack zIndex={'10'}
    borderRadius={'20px 20px 0 0'}
     mt={'10px'}
      flexDirection={'row'}
      p={['0 30px', '0 80px']}
      w={'full'} h={['13vh','15vh']}
      bgColor={'purple.600'}
      justifyContent={'space-between'} alignItems={['start']}>
      <VStack
      zIndex={'100'}
        lineHeight={'0'}
        mt={['20px', "20px"]}
      >
        <Heading>Market</Heading>
        <Text color={'white'} textAlign={'center'} fontSize={'2xl'} fontWeight={'800'}>view</Text>
      </VStack>
      <HStack zIndex={'100'}  w={['100%', 'auto']} h={'100%'} alignItems={'center'} justifyContent={'end'}
        gap={'20px'}
        fontSize={'20px'}>
        <a target='blank' href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
        <a target='blank' href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
        <a target='blank' href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
        <a target='blank' href="https://github.com/"><i class="fa fa-github"></i></a>
        <a target='blank' href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
      </HStack>
    </Stack>
  )
}

export default Footer
