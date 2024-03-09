import { Box, Heading, Stack, VStack, Text, Image, HStack, Button, keyframes } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/img.webp'
import { Link } from 'react-router-dom'


const motion = keyframes`
0%{ transform: translateY(0%)}
50%{ transform: translateY(5%)}
100%{ transform: translateY(0%)}
`;
const animation = `${motion} 4s linear infinite `
const Home = () => {
  return (
    <Stack w={'full'} h={['auto', '80vh']} flexDirection={['column', 'row']}>
      <VStack gap={'15px'} alignItems={'start'} justifyContent={'center'} p={'30px'} w={['full', '70%']} h={['auto', '100%']}>
        <Heading size={['md', 'lg']}>Lorem ipsum dolor sit amet consectetur</Heading>
        <Heading size={['xs', 'sm']}>Lorem ipsum dolor sit amet consectetr</Heading>
        <Text paddingRight={['20px', '100px']} textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat odio ex earum ipsa officia, labore repudiandae possimus recusandae, necessitatibus debitis? Sint facilis culpa perferendis voluptas eveniet suscipit sapiente reprehenderit!</Text>
        <HStack gap={'10px'} flexDirection={'row-reverse'}>
          <Button  w={['fit-content','150px']} colorScheme='purple'><Link to={'/coins'}>Explore coins</Link></Button>
          <Button  w={['fit-content','150px']} colorScheme='purple' variant={'outline'} ><Link to={'/exchange'}>Exchanges</Link></Button>
        </HStack>
      </VStack>
      <Box display={'grid'} placeContent={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
        <Image objectFit={'contain'} animation={animation} src={img}></Image>
      </Box>
    </Stack>
  )
}

export default Home
