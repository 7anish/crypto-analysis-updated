import { Heading, Input,HStack, VStack, Button, Stack , Image} from '@chakra-ui/react'
import React from 'react'
import img5 from '../assets/img5.webp'

const Contact = () => {
    return (

        <Stack w={'full'} h={['auto', '80vh']} flexDirection={['column', 'row']} >

            <VStack gap={'20px'} alignItems={'start'} justifyContent={'center'} p={['30px' , '50px']} w={['full', '50%']} h={['auto', '100%']} alignItems={'stretch'}>
                <Heading>Contact form</Heading>
                <Input placeholder={'Name'} type='text' focusBorderColor='purple.400' ></Input>
                <Input placeholder={'Emailk'} type='email' focusBorderColor='purple.400' ></Input>
                <Input h={'100px'} placeholder={'Message'} type='text' focusBorderColor='purple.400' ></Input>
                <Button w={'50%'} alignSelf={'end'} type='sumbit' colorScheme='purple'>Send</Button>
            </VStack>
            <HStack justifyContent={'center'} alignItems={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
                <Image p={['20px', '50px']} src={img5} />
            </HStack>
        </Stack>
    )
}

export default Contact
