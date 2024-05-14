import { Box, Heading, Stack, VStack, Text, Image, HStack, Button, keyframes } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/img.webp'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import vid from '../assets/zkevm720p.mp4'
import { motion } from 'framer-motion'

export const animation ={
  h1:{
    initial:{
      x: '-100%',
      opacity : 0
    },
    whileInView:{
      x:'0',
      opacity:'1'
    }
  },
  h2:{
    initial:{
      y: '-100%',
      opacity : 0
    },
    whileInView:{
      y:'0',
      opacity:'1'
    }
  },
  div:{
    initial:{
      x: '100%',
      opacity : 0
    },
    whileInView:{
      x:'0',
      opacity:'1'
    }
  }
}


const Home = () => {

  return (
    <>
    <Stack 
    id='home'
    position={'relative'}
    w={'full'} 
    h={['auto', '100vh']} 
    background={'rgb(57,25,93)'}
    background={'linear-gradient(135deg, rgba(57,25,93,1) 25%, rgba(0,0,0,1) 40%);'}
    flexDirection={['column', 'row']}
    overflow={'hidden'}
    margin={0}
    >

      <VStack zIndex={5} color={'white'} paddingLeft={'30px'} marginLeft={['0','20px']} gap={'15px'} alignItems={['center','start']} justifyContent={'center'} p={'30px'} w={['full', '60%']} h={['auto', '100%']}>
        <Heading as={motion.h1} {...animation.h1} textAlign={['center','start']} size={['lg', '3xl']} >All You Want To Know Is Here..</Heading>
        <Heading as={motion.h2} {...animation.h2} size={['xs', 'sm']}>Lorem ipsum dolor sit amet consectetr</Heading>
        <Text as={motion.para} {...animation.h2} paddingRight={['0', '100px']} textAlign={['center','justify']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat odio ex earum ipsa officia, labore repudiandae </Text>
        <HStack gap={'10px'} flexDirection={'row-reverse'}>
          <Button as={motion.button} {...animation.h1}  w={['fit-content','150px']} colorScheme='purple'><Link to={'/coins'}>Explore coins</Link></Button>
          <Button as={motion.button} {...animation.h1} w={['fit-content','150px']} colorScheme='purple' variant={'outline'}><Link to={'/exchange'}>Exchanges</Link></Button>
        </HStack>
      </VStack>
      <Box display={'grid'} placeContent={'center'} p={['20px', '50px']} size={['xs', 'sm']} w={['full', '53%']} h={['auto', '100%']}>
      <video  loop muted autoPlay width={'500px'}>
      <source src={vid}  />
      </video>
      </Box>
    </Stack>
    <About />
    <Contact />
    </>
  )
}

export default Home
