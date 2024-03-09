import { Heading, Stack, VStack, Text, Button, Image, HStack } from '@chakra-ui/react'
import React from 'react'
import img2 from '../assets/analsis.webp'
import img1 from '../assets/phpto4.webp'


const Aboutsection = ({ direction ,heading, para, img  }) => {
    return (
        <Stack w={'full'} h={['auto', '80vh']} flexDirection={['column', `${direction}` ]}>
            <VStack gap={'20px'} alignItems={'start'} justifyContent={'center'} p={'30px'} w={['full', '70%']} h={['auto', '100%']}>
                <Heading>{heading}</Heading>
                <Text pr={['sm' , '70px']} textAlign={'justify'}>{para}</Text>
                <Button colorScheme='purple'>Learn More</Button>
            </VStack>
            <HStack justifyContent={'center'} alignItems={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
                <Image p={['20px', '50px']} src={img} />
            </HStack>
        </Stack>
    )
}

const About = () => {
    return (
        <>
            <Aboutsection direction={'row'} heading={'Our Mission'} para={'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nesciunt Optio Eos Molestiae Reprehenderit Non Odio Neque Commodi Iusto Suscipit. Minus Similique Est Iste Neque Eum, Ea Error Consequuntur Quas Fugit?Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea Cupiditate Aperiam Temporibus Corporis Neque, Consequatur Hic Porro Animi, Itaque Corrupti Facilis Quas Ipsam Repudiandae Ipsum. Quae Distinctio Temporibus Minima Eligendi! Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Totam Magnam Asperiores Mollitia Molestias Omnis Consectetur Minima Aliquam Labore Non Quam Quidem Minus Culpa, Necessitatibus Aspernatur Expedita Illum? Ipsam, Iure Fugiat.'} img={img2} />
            <Aboutsection direction={'row-reverse'} heading={'Our Vision'} para={'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nesciunt Optio Eos Molestiae Reprehenderit Non Odio Neque Commodi Iusto Suscipit. Minus Similique Est Iste Neque Eum, Ea Error Consequuntur Quas Fugit?Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea Cupiditate Aperiam Temporibus Corporis Neque, Consequatur Hic Porro Animi, Itaque Corrupti Facilis Quas Ipsam Repudiandae Ipsum. Quae Distinctio Temporibus Minima Eligendi! Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Totam Magnam Asperiores Mollitia Molestias Omnis Consectetur Minima Aliquam Labore Non Quam Quidem Minus Culpa, Necessitatibus Aspernatur Expedita Illum? Ipsam, Iure Fugiat.'} img={img1} />
        </>
    )
}

export default About
