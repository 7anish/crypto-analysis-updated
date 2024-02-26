import { Box, Button, HStack, Heading, Text, VStack, useDisclosure } from '@chakra-ui/react'
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

const Headeright = () => {
  return (<HStack
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
  </HStack>)
}

const Menubar = ()=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
 return ( <>
    <Button
        onClick={onOpen}
        colorScheme='purple'
        fontSize={'22px'}
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
            </VStack>
          </DrawerBody>
          <DrawerFooter>
              <HStack
              w={'full'}
              justifyContent={'center'}>
              <Button colorScheme='purple'  onClick={onClose} ><Link to={'/login'}>Login</Link></Button>
              <Button colorScheme='purple' variant={'ghost'} onClick={onClose} ><Link to={'/singnup'}>Sign up</Link></Button>
              </HStack>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </>)
}

const Header = () => {
  const width = window.innerWidth;
  const [display, setdisplay] = useState(<Menubar />);
  
  useEffect(()=>{
     if( width >800){
      setdisplay(<Headeright />)
     }
  })

  return (
    <HStack
      w={'full'}
      h={'10vh'}
      pos={'sticky'}
      zIndex={'10'}
      justifyContent={'space-between'}
      p={['0 10px', '0 80px']}
      bgColor={'purple.600'}
    >
      <Box>
        <Heading>Market<Text display={'inline'} color={'white'} te>Viwe</Text></Heading>
      </Box>
      {display}
    </HStack>
  )
}

export default Header
