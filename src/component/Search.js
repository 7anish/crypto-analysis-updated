import React, { useState } from 'react'
import { useRef } from 'react'
import { HStack, Box, InputGroup, Text, Input, InputRightAddon, VStack } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import data from './json file/coinlist.json'

const Search = () => {

    const [value,setvalue] = useState();

    const redirect = (coin) => {
        setvalue(coin)
        window.location.href = `./coins/${coin}`
    }

    const onChange = (e) => {
        setvalue(e.target.value.toLowerCase())
    }

    return (
        <>
            <HStack w={'100%'} h={['10vh', '7vh']} alignItems={'center'} justifyContent={['center', 'end']} paddingInline={'30px'}>
                <Box w={['100%', '30%']}>
                    <InputGroup>
                        <Input placeholder='Search Your Coin' type='text' variant={'outline'} focusBorderColor='black' w={'90%'} onChange={(e) => onChange(e)} ></Input>
                        <InputRightAddon bgColor={'#F5F5F5'}><FaSearch /></InputRightAddon>
                    </InputGroup>
                </Box>
            </HStack>
            <VStack>
            {
                data.map((item)=>{
                    return <Text onClick={()=>{
                        redirect(item.id.toLowerCase())
                    }}>{item.id}</Text>
                })
            }
            </VStack>
        </>

    )
}

export default Search
