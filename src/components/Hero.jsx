import React, { useState } from 'react'
import { ContactModal } from './ContactModal' // Asegúrate de ajustar la ruta

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      className='w-full flex justify-center items-center bg-customDarkBg1 hero-bg-gradient'
      id='home'
    >
      <div className='w-full max-w-4xl flex flex-col justify-center items-center pt-16 text-center'>
        <div className='text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold'>
          Explora un Nuevo Mundo de Oportunidades con Nosotros
        </div>

        <div className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-white px-8'>
          Impulsa tu Negocio con las Herramientas Más Innovadoras
        </div>

        <div className='text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12'>
          Soluciones Personalizadas para Convertir tus Ideas en Realidad
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-52 h-12 mt-10'
          >
            Hablemos
          </button>
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  )
}
