'use client'

import { useState, useEffect } from 'react'

export function useVideoMask() {
  const [maskStyle, setMaskStyle] = useState({})

  useEffect(() => {
    const updateMask = () => {
      setMaskStyle({
        WebkitMaskImage: 'url("/FINTHEM.png")',
        maskImage: 'url("/FINTHEM.png")',
        WebkitMaskSize: '100%',
        maskSize: '100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center'
      })
    }

    updateMask()
    window.addEventListener('resize', updateMask)
    
    return () => window.removeEventListener('resize', updateMask)
  }, [])

  return maskStyle
}
