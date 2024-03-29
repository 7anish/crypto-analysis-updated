import { Box, HStack, Stack, VStack, Image, Text, Heading, Button, Divider, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import axios from 'axios';
import Error from './Error';
import { FaPercent, FaCaretUp, FaCaretDown, FaLink , FaNewspaper } from 'react-icons/fa';
import Chartview from './Chart';

import datae from './json file/bitcoin.json'
import view from './json file/marketchart.json'

// import { FaLink } from "react-icons/fa6";



const Coindetails = () => {
  const params = useParams();
  const [loding, setloding] = useState(true)
  const [data, setdata] = useState([])
  const [error, seterror] = useState(false);
  const [days, setdays] = useState('24h');
  const [marketChart, setmarketChart] = useState([])


  useEffect(() => {
    const fetchcoindetails = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
        const { data: chatrdatas } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=inr&days=${days}`)
        setmarketChart(chatrdatas.prices)
        setdata(data);
        setloding(false)
      } catch (e) {
        seterror(true)
        setloding(false)
      }
    }
    fetchcoindetails();

  }, [days, marketChart, data])

  if (error == true) {
    return <Error />
  }
  return (
    (loding) ? <Loader /> :
      <Stack w={'100%'} h={'auto'} flexDirection={'column'}>
        <Details name={data.id} img={data.image.large}
          price={data.market_data.current_price.inr}
          ch_24={data.market_data.price_change_percentage_24h_in_currency.inr}
          ch_7d={data.market_data.price_change_percentage_7d_in_currency.inr}
          ch_30d={data.market_data.price_change_percentage_30d_in_currency.inr}
          ch_1y={data.market_data.price_change_percentage_1y_in_currency.inr}
          max_s={data.market_data.max_supply}
          cr_s={data.market_data.max_supply}
          mk_c={data.market_data.market_cap.inr}
          symbol={data.symbol}
          website={data.links.homepage[0]}
          whitepaper={data.links.homepage[1]}
          />

        <HStack justifyContent={'center'} alignItems={'center'} >
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('24h') }}>24h</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('7d') }}>7d</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('30d') }}>30d</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('1y') }}>1y</Button>
        </HStack>

        <Chartview arr={marketChart} days={days} />
      </Stack>
  )
}


const Details = ({ name, img, price, ch_24, ch_7d, ch_30d, ch_1y, max_s, cr_s, mk_c, vol, symbol, website , whitepaper }) => {
  let sing24 = (ch_24 > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing7d = (ch_7d > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing30d = (ch_30d > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing1y = (ch_1y > 0) ? <FaCaretUp /> : <FaCaretDown />;

  return (
    <Stack
      w={'full'}
      h={'auto'}
      flexDirection={['column', 'row']}
      p={['20px', '50px 70px']}
      justifyContent={'start'}
      alignItems={'start'}>
      <VStack
        alignItems={'start'}
        w={['full', '50%']}
        h={['auto', '100%']}
      >
        <Image w={['50px', '100px']} aspectRatio={1} src={img}></Image>
        <Heading>{`${name} ${symbol}`}</Heading>
        <Heading size={'lg'}>Price - ₹ {price}</Heading>
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} fontFamily={'serif'} size={'md'}><Text color={(ch_24 < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}>{sing24} {ch_24} <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
        <Heading alignSelf={'start'} size={'sm'}>Market cap - ₹ {mk_c}</Heading>
        <Divider h={'5px'} />
        <Heading alignSelf={'start'} size={'sm'}>Max supply - {`${max_s} ${symbol}`}</Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}  size={'sm'}>7d Chnage- <Text color={(ch_7d < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}> {sing7d} {ch_7d} <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}  size={'sm'}>30d Chnage-  <Text color={(ch_30d < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}>{sing30d}{ch_30d} <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}  size={'sm'}>1y Chnage -  <Text color={(ch_1y < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}>{sing1y}{ch_1y}  <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
      </VStack>
      <VStack
        spacing={'10px'}
        mt={'50px'}
      >
        <Heading>Addtional info-</Heading>
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}  size={'sm'}><Text  display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}><FaLink /> <a href={website} target='blank'>{website}</a></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}  size={'sm'}><Text  display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}><FaNewspaper /> {' '} <a href={whitepaper} target='blank'>White paper</a></Text></Heading>
        <Divider h={'5px'} />
      </VStack>
    </Stack>
  )
}
export default Coindetails
