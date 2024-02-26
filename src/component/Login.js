import { Container, Heading, Input, VStack ,Button,Text ,Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
            <Heading alignSelf={'center'}>Welcome Back</Heading>
            <Avatar w={"100px"} h={'100px'}  alignSelf={'center'}/>
            <Input placeholder={'Email'}  type='email' focusBorderColor='purple.400' ></Input>
            <Input placeholder={'password'}  type='password' focusBorderColor='purple.400'></Input>
            <Button colorScheme='purple' variant={'link'} placeContent={'end'}><Link to={'/'}>Forget password?</Link></Button>
            <Button type='sumbit' colorScheme='purple'>Login</Button>
            <Text alignSelf={'center'}>
            New user{' '}
            <Button colorScheme='purple' variant={'link'} placeContent={'end'} textDecoration={'underline'}><Link to={'/singnup'}>Sing up</Link></Button>
            </Text>
        </VStack>
    </Container>
  )
}

export default Login








