import React, { useEffect, useState } from 'react'
import { Box, HStack, Stack, Text, Image, Heading, CircularProgress, Progress, Tab, Center } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { animation } from './Home'
import { motion } from 'framer-motion'

const Market = () => {
    const d = new Date();
    return (
        <Stack flexDirection={'column'}>
            <Stack
                h={['auto',"80vh"]}
                w={'full'}
                flexDir={['column', 'row']}
            >
                <Box display={'flex'} gap={['10px','20px']} flexDir={'column'} lineHeight={['20px','22px']} textAlign={'justify'} w={['100%', '50%']} h={['50%', '100%']} justifyContent={'center'} alignItems={'start'} paddingInline={'40px'}>
                    <Heading as={motion.h1} {...animation.h1} size={['lg','2xl']}>Fear And Greed Index</Heading>
                    <Text as={motion.para} {...animation.h2} fontWeight={'600'}  fontSize={['sm']}>The Fear & Greed Index Is A Valuable Tool For Investors To Gauge The Overall Sentiment In The Market. Investors Can Make More Informed Investment Decisions By Understanding The Factors Contributing To The Index. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odit Eos Dolor Quaerat Dolorum Corporis Temporibus Voluptatum Doloribus Quis Accusantium, Rem Non, Debitis Nisi Delectus Soluta Omnis Rerum Magnam Reiciendis Quasi.</Text>
                </Box>
                <Box as={motion.div} {...animation.div} p={['20px','']} w={['100%', '50%']} h={['50%', '100%']} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image  boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'} w={['80%','60%']} aspectRatio={'1'} src={`https://alternative.me/images/fng/crypto-fear-and-greed-index-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}.png`} alt={`Crypto Fear & Greed Index on ${d.getMonth + 1} ${d.getDate}, ${d.getFullYear()}`} ></Image>
                </Box>
            </Stack>
            {/* <Stack bgColor={'wheat'} justifyContent={'center'} alignItems={'center'}>
                <TableContainer
                    w={'50%'}
                    bgColor={'pink'}
                    borderRadius={'12px'}
                    display={'grid'}
                    boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'}
                >
                    <Table variant={'striped'}>
                        <Thead>
                            <Td fontWeight={'600'} fontSize={'large'} textAlign={'center'} colSpan={'3'}>Top Company With Their Holdings</Td>
                        </Thead>
                        <Thead fontWeight={'600'}>
                            <Tr>
                                <Th>Company</Th>
                                <Th>Country</Th>
                                <Th>Holdings</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                companydata.map((item, i) => {
                                    return <TableDetails company={item.companies.name} country={item.companies.country} holding={item.companies.total_holdings}/>
                                })
                            }
                        </Tbody>

                    </Table>
                </TableContainer>
            </Stack> */}

        </Stack>
    )
}

const TableDetails = ({ company, country, holding }) => {
    return (
        <Tr>
            <Td>{company}</Td>
            <Td>{country}</Td>
            <Td>{holding}</Td>
        </Tr>
    )
}

export default Market
