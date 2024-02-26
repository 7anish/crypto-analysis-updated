import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, Text,  Button } from '@chakra-ui/react'
import Loader from './Loader'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { FaStar, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";

import Error from './Error'
import { Link } from 'react-router-dom'





const Exchangecard = ({ id, name, rank, image, volume, url, trust }) => {
    return (
        <Tr m={'10px 0 '} fontWeight={'bold'} cursor={'pointer'}>
            <Td className='show-none'>{rank}</Td>
            <Td><Image src={image} w={['20px', '40px']} aspectRatio={'1'}></Image></Td>
            <Td w={['50px', '100px']}>{name}</Td>
            <Td className='show-none'>{volume.toFixed(2)}{' '}BTC</Td>
            <Td className='show-none'><Text color={'green'} display={'flex'} justifyContent={'start'} alignItems={'center'}>{trust}{' '}<FaStar /> </Text></Td>
            <Td><Text color={'blue.600'} display={'flex'} justifyContent={'start'} alignItems={'center'} gap={'3px'}><a color='blue' href={url} target={'blank'}>Visit</a><FaExternalLinkAlt /></Text></Td>
        </Tr>
    )
}


const Exchange = () => {
    const [loding, setloding] = useState(true)
    const [exchangelist, setexchangelist] = useState([])
    const [error, seterror] = useState(false)
    useEffect(() => {
        const fetchcoins = async () => {
            try {
                const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges')
                setexchangelist(data)
                setloding(false)
            }
            catch (er) {
                seterror(true)
                setloding(false)
            }
        }


        fetchcoins()
    }, [exchangelist]
    )

    if (error == true) {
        return <Error />
    }
    else {

        return (

            <>
                {loding ? <Loader /> : <>
                    <TableContainer
                        p={['0', '10px 30px']}>
                        <Table size={['sm', 'lg']} alignItems={'Center'}>
                            <Thead>
                                <Tr>
                                    <Th className='show-none'>Rank</Th>
                                    <Th>Logo</Th>
                                    <Th>Name</Th>
                                    <Th className='show-none'>volume(24h)</Th>
                                    <Th className='show-none'>Trust Score</Th>
                                    <Th>Link</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {exchangelist.map((i, index) => <Exchangecard key={index} id={i.id} name={i.name} rank={i.trust_score_rank} image={i.image} volume={i.trade_volume_24h_btc} url={i.url} trust={i.trust_score} />)}
                            </Tbody>
                        </Table>
                    </TableContainer>

                </>
                }
            </>
        );
    }
}


export default Exchange
