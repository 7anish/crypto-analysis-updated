import { Box, Button, HStack, Heading, Stack, Text, VStack, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { GrBitcoin } from 'react-icons/gr'
import { HashLink } from 'react-router-hash-link'

const Headeright = () => {
  return (
  <HStack
    className='horizontal-menu-bar'
    spacing={'40px'}
  >
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><HashLink to={'/#home'}>Home</HashLink></Text>
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><Link to={'/exchange'}>Exchange</Link></Text>
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><Link to={'/coins'}>Coins</Link></Text>
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><Link to={'/market'}>Market</Link></Text>
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><HashLink to={'/#about'}>About</HashLink></Text>
    <Text fontWeight={'700'} color={'white'} transition={'all .3s'} _hover={{
      color: "purple.600"
    }}><HashLink to={'/#contact'}>Contact</HashLink></Text>
    <Button display={'none'} bgColor={'white.300'}><Link to={'/login'}>Login</Link></Button>
    <Button display={'none'} colorScheme='purple'><Link to={'/singnup'}>Sing up</Link></Button>
  </HStack>)
}

const Menubar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (<>
    <Button className='menu-bar-button'
      onClick={onOpen}
      colorScheme='purple'
      fontSize={'22px'}
      zIndex={'100'}
    >
      <BiMenuAltLeft />
    </Button>

    <Drawer
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack
            alignItems={'stretch'}
            spacing={'8px'}
          >
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/#home'}>Home</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/coins'}>Coins</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/market'}>Market</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/exchange'}>Exchange</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><HashLink to={'/#about'}>About</HashLink></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><HashLink to={'/#contact'}>Contact</HashLink></Button>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <HStack display={'none'}
            w={'full'}
            justifyContent={'center'}>
            <Button colorScheme='purple' onClick={onClose} ><Link to={'/login'}>Login</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/singnup'}>Sign up</Link></Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>)
}

const Header = () => {

  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  return (
    <HStack
      w={'full'}
      h={'10vh'}
      pos={'sticky'}
      zIndex={'10'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={['0 30px', '0 80px']}
      background={'#0a080c'}
      position={'sticky'}
      top={0}
      left={0}
    >
      <GrBitcoin fontSize={'50px'} color={'white'} />
      {isLargerThan900 ? <Headeright /> : <Menubar />}
    </HStack>
  )
}

export default Header
