import React, { useState } from 'react'
import { ContactModal } from './ContactModal'
import { Companies } from './Companies'

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/assets/images/cinies.jpg',
    '/assets/images/dummy1.jpg',
    '/assets/images/dummy2.jpg'
  ]

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <section
      className='w-full flex justify-center items-center mx-auto bg-customDarkBg1 hero-bg-gradient px-6'
      id='home'
    >
      <div className='w-full max-w-4xl flex flex-col justify-center items-center pt-16 text-center mx-auto'>
        <div className='mb-6 sm:mt-32 mt-16 font-bold'>
          <h1 className='text-customSecondary text-xl lg:text-3xl mx-auto'>
            Explora un Nuevo Mundo de Oportunidades con Nosotros
          </h1>
        </div>

        <div className='text-5xl sm:text-5xl lg:text-5xl font-bold tracking-wide text-white px-8'>
          Impulsa tu Negocio con <br />
          las Herramientas Más Innovadoras
        </div>

        <div className='text-customGrayText text-lg  lg:text-xl font-bold  mt-10 px-10'>
          Soluciones Personalizadas para <br />
          Convertir tus Ideas en Realidad
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded-xl w-52 h-12 mt-10'
          >
            Hablemos
          </button>
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className='mt-10 relative'>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className='w-full rounded-lg'
          />
          <button
            onClick={prevSlide}
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2'
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2'
          >
            ▶
          </button>
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
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
        <Companies />
      </div>
    </section>
  )
}
