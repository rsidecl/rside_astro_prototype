import React, { useState, useEffect } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/assets/images/image.png',
    '/assets/images/imagen2.png',
    '/assets/images/imagen3.png'
  ]

  // Depuración: Verificar cambios en currentIndex
  useEffect(() => {
    console.log('Current Index:', currentIndex)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    console.log('Previous Slide Clicked:', currentIndex) // Debugging
  }

  return (
    <section className='bg-customDarkBg1 flex flex-col md:flex-row mx-4 md:mx-10 lg:w-full lg:mx-auto px-10 lg:px-20 mt-10'>
      <div className='flex-1 text-left lg:ml-40'>
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
        <div className='text-center'>
          <a href='service'>
            <button className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-40 sm:w-52 h-14 mt-8 md:mt-10'>
              Nuestros Servicios
            </button>
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div className='flex-1 flex justify-center items-center relative mt-8 lg:mr-20'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg'
        />
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg'
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg'
        >
          <MdNavigateNext />
        </button>
        <div className='flex space-x-2 mt-4 absolute  bottom-4'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full translate-y-4 ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
