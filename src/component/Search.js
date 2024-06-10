import React, { useState } from 'react'
import { useRef } from 'react'
import { HStack, Box, InputGroup, Text, Input, InputRightAddon, VStack, Divider } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import data from './json file/coinlist.json'

const Search = () => {

    const [value, setvalue] = useState();

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
            <VStack  position={'absolute'} w={'100%'} h={'fit-content'} gap={'1px'} alignItems={'flex-end'} paddingInline={['10px','30px']}  >
                {
                    data.filter((item) => {
                        const getedcoin = value
                        const sercoin = item.id.toLowerCase()

                        return getedcoin && sercoin.startsWith(value);
                    }).map((item) => {
                        return <Box borderRadius={'6px'} boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'} zIndex={'10'} bgColor={'#F5F5F5'} w={['100%', '30%']} h={'5vh'} p={'10px'}>
                            <Text textTransform={'capitalize'} fontWeight={'500'} cursor={'pointer'} onClick={() => {
                                redirect(item.id.toLowerCase())
                            }}>{item.id}</Text>
                        </Box>

                    })
                }
            </VStack>
        </>

    )
}

export default Search
