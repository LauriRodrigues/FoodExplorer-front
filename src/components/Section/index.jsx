import { useState, useEffect, useRef } from 'react'
import { Container } from './styles'
import { motion } from 'framer-motion'

export function Section({title, children}) {
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <Container>
      <h2>{title}</h2>

      <motion.div 
        ref={carousel} 
        className="carousel" 
        whileTap={{cursor: "grabbing"}}
      >

        <motion.div 
          className='card' 
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >
          {children}
        </motion.div>

      </motion.div>

    </Container>
  )
}