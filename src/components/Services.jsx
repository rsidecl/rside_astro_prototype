import React, { useState } from 'react'
import DeveloperService from './DeveloperService'

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/assets/images/image.png',
    '/assets/images/imagen2.png',
    '/assets/images/imagen3.png'
  ]

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className='bg-customDarkBg1 w-full flex flex-col md:flex-row mx-4 md:mx-10  px-4 lg:mx-60 mt-10'>
      <div className='flex-1 text-center md:text-left'>
        <h1 className='text-customSecondary font-bold text-2xl my-4 md:my-6'>
          Impulsa el Desarrollo de tu <br /> Sitio o Aplicación
        </h1>
        <h1 className='text-3xl sm:text-4xl text-white font-bold my-4 md:my-6'>
          Servicios Integrales para <br /> un Desarrollo Exitoso de <br />{' '}
          Principio a Fin.
        </h1>
        <h3 className='text-gray-400 font-bold text-lg sm:text-xl my-4 md:my-6'>
          Nos Importa Ofrecer Diseño, <br /> Implementación, Lanzamiento y{' '}
          <br /> Mantenimiento continuo para tu proyecto
        </h3>
        <a href='service'>
          <button className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-40 sm:w-52 h-14 mt-8 md:mt-10'>
            Nuestros <br /> Servicios
          </button>
        </a>
      </div>

      <div className='flex-1 flex justify-center items-center relative mt-8 lg:mr-72 md:mt-0'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg'
        />
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg'
          style={{ marginLeft: '-2rem' }}
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg'
          style={{ marginRight: '-2rem' }}
        >
          ▶
        </button>
        <div className='flex space-x-2 mt-4'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
