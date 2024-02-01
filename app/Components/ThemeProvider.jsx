'use client';
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
const TProvider = ({childern}) => {
  const [mounted, setMounted]=useState(false);
  useEffect(()=>{
setMounted(true);
  },[]);
  if (!mounted) {
    return(
    <div>
      {childern}
    </div>
    )
  }
    return (
        <ThemeProvider>
            {childern}
        </ThemeProvider>
  )
}

export default TProvider
