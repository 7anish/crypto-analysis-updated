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

const Headeright = () => {
  return (<HStack
    className='horizontal-menu-bar'
    spacing={'15px'}
  >
    <Text fontWeight={'700'} transition={'all .3s'} _hover={{
      color: "white"
    }}><Link to={'/'}>Home</Link></Text>
    <Text fontWeight={'700'} transition={'all .3s'} _hover={{
      color: "white"
    }}><Link to={'/exchange'}>Exchange</Link></Text>
    <Text fontWeight={'700'} transition={'all .3s'} _hover={{
      color: "white"
    }}><Link to={'/coins'}>Coins</Link></Text>
    <Text fontWeight={'700'} transition={'all .3s'} _hover={{
      color: "white"
    }}><Link to={'/about'}>About</Link></Text>
    <Text fontWeight={'700'} transition={'all .3s'} _hover={{
      color: "white"
    }}><Link to={'/contact'}>Contact</Link></Text>
    <Button bgColor={'white.300'}><Link to={'/login'}>Login</Link></Button>
    <Button colorScheme='purple'><Link to={'/singnup'}>Sing up</Link></Button>
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
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/'}>Home</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/coins'}>Coins</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/exchange'}>Exchange</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/about'}>About</Link></Button>
            <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/contact'}>Contact</Link></Button>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <HStack
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
      borderRadius={'0 0 20px 20px'}
      w={'full'}
      h={'10vh'}
      pos={'sticky'}
      zIndex={'10'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={['0 30px', '0 80px']}
      bgColor={'purple.600'}
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
