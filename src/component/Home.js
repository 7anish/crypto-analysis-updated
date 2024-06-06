import { Box, Heading, Stack, VStack, Text, Image, HStack, Button, keyframes, Center } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/img.webp'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import { motion } from 'framer-motion'
import { FaArrowCircleRight } from "react-icons/fa";


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
    background={'rgb(11, 9, 12)'}
    background={'linear-gradient(180deg, rgba(11, 9, 12, 1) 1%, rgba(57, 25, 93, 1) 48%, rgba(46, 24, 83, 1) 68%, rgba(11, 9, 12, 1) 90%)'}
    flexDirection={['column']}
    overflow={'hidden'}
    color={'white'}
    justifyContent={'start'}
    pt={['20px','100px']}
    pb={['20px' , '0']}
    alignItems={'center'}
    gap={'40px'}
    paddingInline={['15px','70px']}

    >
    <Link to={'/coins'}><Button as={motion.h1} {...animation.h1} transition={'all .3s'}  _hover={{
      bgColor : 'rgba(255, 255, 255, .5)'
    }} display={['none','flex']} bgColor={'rgba(255, 255, 255, .3)'}>Visit Market&nbsp;<FaArrowCircleRight bgColor={'white'} color='white' fontFamily={'20px'} /></Button></Link>
    <Heading as={motion.h1} {...animation.h1} textAlign={['center','start']}   fontSize={['50px','80px']}>All You Want To Know Is Here..</Heading>
    <Text as={motion.h1} {...animation.h1} fontWeight={['500','600']} fontSize={['14px','18px']} textAlign={'center'} w={['300px','600px']} h={'100px'} color={'rgba(255, 255, 255, .7)'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore, iste illum expedita quisquam, Lorem</Text>
    <Stack alignItems={'center'} gap={'30px'} flexDirection={['column', 'row']}>
    <Link  to={'/exchange'}><Box as={motion.div} {...animation.div} p={'30px'} borderRadius={'12px'} transition={'all .3s'} bgColor={'rgba(255, 255, 255, .2)'} w={['330px','400px']} h={'200px'} _hover={{
        bgColor : 'rgba(255, 255, 255, .3)',
        width : '410px',
      }}>
        <Heading fontSize={'30px'}>Exchange</Heading>
        <Text display={'inline-flex'} alignItems={'flex-end'}  fontWeight={'500'} mt={'25px'} color={'rgba(255, 255, 255, .7)'}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.<FaArrowCircleRight fontSize={'35px'} /></Text>
      </Box></Link>
      <Link to={'/coins'}><Box as={motion.div} {...animation.div} p={'30px'} borderRadius={'12px'} transition={'all .3s'} bgColor={'rgba(255, 255, 255, .2)'} w={['330px','400px']} h={'200px'} _hover={{
        bgColor : 'rgba(255, 255, 255, .3)',
        width : '410px',
      }}>
        <Heading fontSize={'30px'}>Coins</Heading>
        <Text display={'inline-flex'} alignItems={'flex-end'}  fontWeight={'500'} mt={'25px'} color={'rgba(255, 255, 255, .7)'}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.<FaArrowCircleRight fontSize={'35px'} /></Text>
      </Box></Link>
      <Link  to={'/market'}><Box as={motion.div} {...animation.div} p={'30px'} borderRadius={'12px'} transition={'all .3s'} bgColor={'rgba(255, 255, 255, .2)'} w={['330px','400px']} h={'200px'} _hover={{
        bgColor : 'rgba(255, 255, 255, .3)',
        width : '410px',
      }}>
        <Heading fontSize={'30px'}>Fear & Greed index</Heading>
        <Text display={'inline-flex'} alignItems={'flex-end'}  fontWeight={'500'} mt={'25px'} color={'rgba(255, 255, 255, .7)'}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.<FaArrowCircleRight fontSize={'35px'} /></Text>
      </Box></Link>
    </Stack>
    </Stack>
    <About />
    <Contact />
    </>
  )
}

export default Home
