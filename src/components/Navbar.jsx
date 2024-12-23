import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navbarLinks = [{ label: 'R-[ SIDE ]', href: '/', ariaLabel: 'Home' }]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl'>
      <div className='2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className='navbar-link' href='/' aria-label='Home'>
            <div className='flex justify-start items-center grow basis-0'>
              <div className='text-white mr-2 '>
                <img className='w-32' src='/rsidenb.png' />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className=' lg:flex h-full  mx-2   pl-12 pb-2'>
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className='navbar-link text-5xl'
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        ></motion.div>
        <div
          className='hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2'
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className='flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        '
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className='navbar-link text-4xl'
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
