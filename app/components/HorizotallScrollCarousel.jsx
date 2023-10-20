'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Card from './Card'

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default HorizontalScrollCarousel

export { HorizontalScrollCarousel }

const cards = [
  {
    src: '/images/1.jpg',
    title: 'Kitchen Craziness',
    link: 'https://github.com/anilaltan/Kitchen-Craziness',
    id: 1
  },
  {
    src: '/images/2.jpg',
    title: 'Movie DB',
    link: 'https://github.com/anilaltan/react-rmdb',
    id: 2
  },
  {
    src: '/images/3.jpg',
    title: 'Dungeon Game',
    link: 'https://github.com/anilaltan/Dungeon-Game',
    id: 3
  },
  {
    src: '/images/4.jpg',
    title: 'AirBnb Clone',
    link: 'https://github.com/anilaltan/windbnb-react',
    id: 4
  },
  {
    src: '/images/5.jpg',
    title: 'Bug Tracker',
    link: 'https://github.com/anilaltan/BugTracker',
    id: 5
  },
  {
    src: '/images/6.jpg',
    title: 'To-Do App',
    link: 'https://github.com/anilaltan/react-to-do-app',
    id: 6
  },
  {
    src: '/images/7.jpg',
    title: 'Space Shooter',
    link: 'https://github.com/anilaltan/Space-Shooter',
    id: 7
  }
]
