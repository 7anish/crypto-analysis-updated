import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(()=>{
        console.log(pathname)
        window.scrollTo(0,0);
    },[pathname])
  return (
   null
  )
}

export default ScrollToTop
