import { Heading, Input,HStack, VStack, Button, Stack , Image} from '@chakra-ui/react'
import React  from 'react'
import img5 from '../assets/contact-us-fotor-bg-remover-2024051331213.png'
import { useRef } from 'react'


const Contact = () => {
    const name = useRef()
    const email = useRef()
    const mess = useRef()
    const sumbit = ()=>{
        name.current.value = '';
        email.current.value = '';
        mess.current.value = '';
    }
    return (

        <Stack id='contact' color={'white'} bgColor={'#000'} w={'full'} h={['auto', '80vh']} flexDirection={['column', 'row']} >

            <VStack gap={'20px'} alignItems={'start'} justifyContent={'center'} p={['30px' , '50px']} w={['full', '50%']} h={['auto', '100%']} alignItems={'stretch'}>
                <Heading>Contact form</Heading>
                <Input placeholder={'Name'} type='text' focusBorderColor='purple.400' ref={name} required></Input>
                <Input placeholder={'Email'} type='email' focusBorderColor='purple.400' ref={email} required ></Input>
                <Input h={'100px'} placeholder={'Message'} type='text' focusBorderColor='purple.400' ref={mess} required ></Input>
                <Button  _hover={{
                    bgColor:'white',
                    color:'purple.600',
                    translateX:'10px',
                }} 
                transition={'all .3s'} w={'30%'} alignSelf={'end'} type='sumbit' colorScheme='purple' onClick={sumbit}>Send</Button>
            </VStack>
            <HStack justifyContent={'center'} alignItems={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
                <Image p={['20px', '50px']} src={img5} />
            </HStack>
        </Stack>
    )
}

export default Contact
