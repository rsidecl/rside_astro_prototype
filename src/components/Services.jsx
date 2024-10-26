import React, { useState } from 'react'

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
    <div className='bg-customDarkBg1 w-full flex flex-col md:flex-row mx-4 md:mx-10 lg:mx-40 mt-10'>
      <div className='flex-1'>
        <h1 className='text-customSecondary font-bold text-2xl my-6'>
          Impulsa el Desarrollo de tu <br /> Sitio o Aplicación
        </h1>
        <h1 className='text-4xl text-white font-bold my-6'>
          Servicios Integrales para <br /> un Desarrollo Exitoso de <br />
          Principio a Fin.
        </h1>
        <h3 className='text-white text-lg my-6'>
          Nos Importa Ofrecer Diseño, <br /> Implementación, Lanzamiento y{' '}
          <br />
          Mantenimiento continuo para tu proyecto
        </h3>
        <a href=''>
          <button className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-full sm:w-52 h-12 mt-10'>
            Hablemos
          </button>
        </a>
      </div>

      <div className='flex-1 flex justify-center items-center relative'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-96 h-96 rounded-lg'
        />
        <div className='flex  space-x-2 translate-y-52 -translate-x-52'>
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
