import { Box, HStack, Stack, VStack, Image, Text, Heading, Button, Divider, Progress, Input ,InputGroup ,InputLeftAddon } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import axios from 'axios';
import Error from './Error';
import { FaPercent, FaCaretUp, FaCaretDown, FaLink, FaNewspaper, FaGlobe, FaGithub } from 'react-icons/fa';
import Chartview from './Chart';

import datae from './json file/bitcoin.json'
import view from './json file/marketchart.json'

import { key } from '../index'
import Notfound from './Notfound';



const Coindetails = () => {
  const params = useParams();
  const [loding, setloding] = useState(true)
  const [data, setdata] = useState([])
  const [error, seterror] = useState(false);
  const [days, setdays] = useState('24h');
  const [marketChart, setmarketChart] = useState([])
  const [isfound , setisfound] = useState(true)


  useEffect(() => {
    const fetchcoindetails = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
        const { data: chatrdatas } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=inr&days=${days}${key}`)
        setmarketChart(chatrdatas.prices)
        setdata(data);
        setloding(false)
      } catch (e) {
        console.log(e.message)
        if(e.message == 'Request failed with status code 404'){
          setisfound(false)
        }
        else{
        seterror(true)
        setloding(false)
        }
      }
    }
    fetchcoindetails();

  }, [days, marketChart, data])

  if(!isfound){
    return <Notfound />
  }

  if (error == true) {
    return <Error />
  }


  return (
    (loding) ? <Loader /> :
      <VStack w={'100%'} h={'auto'}>
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
          Github={data.links.repos_url.github[0]}
        />
        <HStack justifyContent={'center'} alignItems={'center'} >
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('24h') }}>24h</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('7d') }}>7d</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('30d') }}>30d</Button>
          <Button colorScheme='purple' variant={'ghost'} onClick={() => { setdays('1y') }}>1y</Button>
        </HStack>
        <Chartview arr={marketChart} days={days} />
      </VStack>
  )
}


const Details = ({ name, img, price, ch_24, ch_7d, ch_30d, ch_1y, max_s, cr_s, mk_c, vol, symbol, website, whitepaper, Github }) => {
  let sing24 = (ch_24 > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing7d = (ch_7d > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing30d = (ch_30d > 0) ? <FaCaretUp /> : <FaCaretDown />;
  let sing1y = (ch_1y > 0) ? <FaCaretUp /> : <FaCaretDown />;

  const crypto = useRef() 
  const rupee = useRef()

  const convertToInr = ()=>{
    rupee.current.value=crypto.current.value*price;
  }

  const convertToCr = ()=>{
    crypto.current.value = rupee.current.value/price;
  }

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
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}>7d Chnage- <Text color={(ch_7d < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}> {sing7d} {ch_7d} <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}>30d Chnage-  <Text color={(ch_30d < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}>{sing30d}{ch_30d} <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}>1y Chnage -  <Text color={(ch_1y < 0 ? 'red' : 'green')} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}>{sing1y}{ch_1y}  <FaPercent /></Text></Heading>
        <Divider h={'5px'} />
      </VStack>
      <VStack
        justifyContent={'center'}
        alignItems={'center'}
        spacing={'10px'}
        // mt={'50px'}
        // bgColor={'wheat'}
        w={['full', '50%']}
        h={['auto', '100%']}
      >
        <Heading>Addtional info-</Heading>
        <Heading mt={'20px'} display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}><Text display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}><FaGlobe /> &nbsp; <a href={website} target='blank'>Website</a></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}><Text display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}><FaNewspaper />  &nbsp; <a href={whitepaper} target='blank'>White paper</a></Text></Heading>
        <Divider h={'5px'} />
        <Heading display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'} size={'sm'}><Text display={'flex'} justifyContent={'start'} alignItems={'center'} alignSelf={'start'}><FaGithub />  &nbsp; <a href={Github} target='blank'>Github</a></Text></Heading>
        <Divider h={'5px'} />
        <Heading>Converter</Heading>
        <InputGroup>
          <InputLeftAddon>{symbol.toUpperCase()}</InputLeftAddon>
          <Input w={'50%'} type='number' placeholder={`Enter Number Of ${symbol.toUpperCase()}`} ref={crypto}  onChange={convertToInr}/>
        </InputGroup>
        <Divider h={'5px'} />
        <InputGroup>
          <InputLeftAddon>INR</InputLeftAddon>
          <Input w={'50%'}  type='number' placeholder='Enter INR' ref={rupee} onChange={convertToCr} />
        </InputGroup>


      </VStack>
    </Stack>
  )
}
export default Coindetails
