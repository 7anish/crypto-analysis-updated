import { Heading, Stack, VStack, Text, Button, Image, HStack } from '@chakra-ui/react'
import React from 'react'
import vid1 from '../assets/pos.mp4'
import vid2 from '../assets/Miden.mp4.mp4'


const Aboutsection = ({ direction, heading, para, vid }) => {
    return (
        <Stack bgColor={'#0a080c'} w={'full'} h={['auto', '80vh']} flexDirection={['column', `${direction}`]} color={'white'}>
            <VStack gap={'20px'} alignItems={'start'} justifyContent={'center'} p={'30px'} w={['full', '60%']} h={['auto', '100%']} marginLeft={['', '60px']}>
                <Heading>{heading}</Heading>
                <Text pr={['sm', '70px']} textAlign={'justify'}>{para}</Text>
                <Button colorScheme='purple' _hover={{
                    bgColor: 'white',
                    color: 'purple.600',
                    translateX: '10px',
                }}
                    transition={'all .3s'}>Learn More</Button>
            </VStack>
            <HStack justifyContent={'center'} alignItems={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
                <video loop muted autoPlay width={'500px'}>
                    <source src={vid} />
                </video>
            </HStack>
        </Stack>
    )
}

const About = () => {
    return (
        <div id='about'>
            <Aboutsection direction={'row-reverse'} heading={'Our Mission'} para={'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nesciunt Optio Eos Molestiae Reprehenderit Non Odio Neque Commodi Iusto Suscipit. Minus Similique Est Iste Neque Eum, Ea Error Consequuntur Quas Fugit?Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea Cupiditate Aperiam Temporibus Corporis Neque, Consequatur Hic Porro Animi, Itaque Corrupti Facilis Quas Ipsam Repudiandae Ipsum. Quae Distinctio Temporibus Minima Eligendi!.'} vid={vid1} />
            <Aboutsection direction={'row'} heading={'Our Vision'} para={'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nesciunt Optio Eos Molestiae Reprehenderit Non Odio Neque Commodi Iusto Suscipit. Minus Similique Est Iste Neque Eum, Ea Error Consequuntur Quas Fugit?Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea Cupiditate Aperiam Temporibus Corporis Neque, Consequatur Hic Porro Animi, Itaque Corrupti Facilis Quas Ipsam Repudiandae Ipsum. Quae Distinctio Temporibus Minima Eligendi!'} vid={vid2} />
        </div>
    )
}

export default About
