import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Image, Text, Button, Box, InputGroup,Input,InputRightAddon, HStack, Divider } from '@chakra-ui/react'
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

import {
  FaPercent, FaChevronRight, FaChevronLeft, FaCaretDown, FaCaretUp
} from "react-icons/fa";

import Error from './Error'
import { Link } from 'react-router-dom'
import { key } from '../index'


import data from './json file/coinlist.json'
import Search from './Search'
import { useNavigate } from 'react-router-dom'









const Exchangecard = ({ name, rank, image, price, change, id }) => {
  const navigate = useNavigate()
  var sing;
  change >= 0 ? sing = <FaCaretUp /> : sing = <FaCaretDown />;

  return (
    <Tr m={'10px 0 '} fontWeight={'bold'} cursor={'pointer'} onClick={()=> navigate(`./${id}`)}>
      <Td className='show-none'>{rank}</Td>
      <Td><Image src={image} w={['20px', '40px']} aspectRatio={'1'}></Image></Td>
      <Td w={['50px', '100px']}>{name}</Td>
      <Td>₹{` ${price}`}</Td>
      <Td className='show-none'><Text color={(change < 0) ? 'red.500' : 'green'} display={'flex'} justifyContent={'start'} alignItems={'center'}>{sing}{change}<FaPercent />
      </Text></Td>
      {/* <Td><Button alignSelf={'end'} w={'30%'} h={'50px'} ><Link to={`./${id}`}><FaChevronRight /></Link></Button></Td> */}
    </Tr>
  )
}


const Coins = () => {
  const [loding, setloding] = useState(true)
  const [coinlist, setcoinlist] = useState([])
  const [error, seterror] = useState(false)
  const [page, setpage] = useState(1)


  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en${key}`)
        setcoinlist(data)
        setloding(false)
      }
      catch (er) {
        console.log(er)
        seterror(true)
        setloding(false)
      }
    }
    fetchcoins()
  }, [coinlist])

  if (error == true) {
    return <Error />
  }

  return (

    <>
      {loding ? <Loader /> : <>
      <Search />
        <Divider/>

        <TableContainer
          p={['0', '10px 30px']}>
          <Table size={['sm', 'lg']} alignItems={'Center'}>
            <Thead>
              <Tr>
                <Th className='show-none'>Rank</Th>
                <Th>Logo</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th className='show-none'>%change</Th>
                {/* <Th >Details</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {coinlist.map((i, index) => <Exchangecard key={index} id={i.id} name={i.name} rank={i.market_cap_rank} price={i.current_price} change={i.price_change_percentage_24h} image={i.image} trust={i.trust_score} />)}
            </Tbody>
            <TableCaption
            >
              <Button mr={'20vw'} colorScheme='purple' variant={'ghost'} onClick={() => {
                (page > 1) ? setpage(page - 1) : setpage(page)
              }} ><FaChevronLeft />Previous</Button>

              <Button ml={'20vw'} colorScheme='purple' variant={'ghost'} onClick={() => {
                setpage(page + 1)
              }} >Next<FaChevronRight /></Button>

            </TableCaption>
          </Table>
        </TableContainer>

      </>
      }
    </>
  );
}



export default Coins

