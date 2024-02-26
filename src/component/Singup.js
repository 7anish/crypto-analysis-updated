import { Container, Heading, Input, VStack ,Button,Text, Avatar,} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Singup = () => {
  return (
    <Container
    w={'100%'}
    h={'100vh'}
    display={'grid'}
    placeContent={'center'}
    >
        <VStack alignItems={'stretch'}
        w={['auto', '400px']}
        padding={'30px'}
        spacing={'30px'}
        >
            <Heading alignSelf={'center'}>Sing UP</Heading>
            <Avatar w={"100px"} h={'100px'}  alignSelf={'center'}/>
            <Input  placeholder={'Name'}  type='text'   focusBorderColor='purple.400' ></Input>
            <Input placeholder={'Email'}  type='email' focusBorderColor='purple.400' ></Input>
            <Input placeholder={'password'}  type='password' focusBorderColor='purple.400'></Input>
            <Button type='sumbit' colorScheme='purple'>Login</Button>
            <Text alignSelf={'center'}>
            Alerady have account{' '}
            <Button colorScheme='purple' variant={'link'} placeContent={'end'} textDecoration={'underline'}><Link to={'/login'}>Login</Link></Button>
            </Text>
        </VStack>
    </Container>
  )
}



export default Singup
