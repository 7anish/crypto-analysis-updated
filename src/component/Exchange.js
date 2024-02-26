import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, HStack, VStack ,Image , Text } from '@chakra-ui/react'

const Exchange = () => {
  const [error, seterror] = useState('hello')
  const [exchangelist, setexchangelist] = useState([])
  useEffect(() => {
    try {
      const fetchexchange = async () => {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges')
        setexchangelist(data)
        console.log(data)
      }
      fetchexchange();
    } catch (er) {
      console.log(er)
    }
  })

  return (
    <VStack>
      {exchangelist.map(i =>
        <Exchangecard key={i.id} name={i.name} rank={i.trust_score_rank} image={i.image} url={i.url}  />
      )}
    </VStack>

  )
}

const Exchangecard = (name , rank , image , url) => {
  <a href={url}>
  <HStack
  w={'full'}
  h={'10vh'}
  justifyContent={'space-around'}
  >
  <Text>{rank}</Text>
  <Image src={image}></Image>
  <Text>{name}</Text>

  </HStack>
  </a>
}

export default Exchange