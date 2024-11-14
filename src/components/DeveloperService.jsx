import React, { useState } from 'react'
import { ContactModal } from './ContactModal'
import { Companies } from './Companies'

export const DeveloperService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className='w-full flex bg-customDarkBg1' id='service'>
      <div className='mt-40 text-center ml-4 sm:ml-16 md:ml-24 lg:ml-40'>
        <h1 className='text-customSecondary text-xl lg:text-3xl font-bold mt-20 mx-auto'>
          Impulsa el Desarrollo de tu Sitio o Aplicación
        </h1>
        <h1 className='text-5xl text-white font-bold mt-16'>
          Servicios Integrales para un Desarrollo <br />
          Exitoso de Principio a Fin.
        </h1>
        <h1 className='text-gray-400 font-bold text-2xl mt-12'>
          Nos Importa Ofrecer Diseño, Implementación, Lanzamiento y <br />
          Mantenimiento Continuo para tu proyecto
        </h1>

        <div className='flex flex-wrap justify-center mt-20 gap-6 sm:gap-8 md:gap-12'>
          <div className='w-full sm:w-80 md:w-[319px] h-[450px] bg-customDarkBg2 rounded px-6 py-6'>
            <img
              src='/assets/icons/ecommerce.svg'
              alt='ecommerce'
              className='mx-auto'
            />
            <h1 className='text-customSecondary mt-8'>Ecommerce</h1>
            <p className='text-gray-400'>
              Creamos tiendas en línea <br />
              personalizadas que impulsan tus <br />
              ventas y ofrecen una <br />
              experiencia de compra fluida. <br />
              Desarrollamos plataformas de <br />
              comercio electrónico seguras, <br />
              optimizadas para dispositivos <br />
              móviles y con integración de <br />
              sistemas de pago, que permiten <br />
              gestionar productos, pedidos y <br />
              clientes de manera eficiente.
            </p>
          </div>
          <div className='w-full sm:w-80 md:w-[319px] h-[450px] bg-customDarkBg2 rounded px-6 py-6'>
            <img
              src='/assets/icons/landingpage.svg'
              alt='landing page'
              className='mx-auto'
            />
            <h1 className='text-customSecondary mt-10'>LandingPage</h1>
            <p className='text-gray-400'>
              Diseñamos landing pages <br />
              atractivas y efectivas, <br />
              optimizadas para captar la <br />
              atención de tus visitantes y <br />
              convertirlos en clientes. <br />
              Utilizamos diseño moderno, <br />
              mensajes persuasivos y llamadas <br />
              a la acción estratégicas para <br />
              maximizar el rendimiento de tus <br />
              campañas de marketing digital.
            </p>
          </div>
          <div className='w-full sm:w-80 md:w-[319px] h-[450px] bg-customDarkBg2 rounded px-6 py-6'>
            <img
              src='/assets/icons/graficos.svg'
              alt='graficos'
              className='mx-auto'
            />
            <h1 className='text-customSecondary mt-4'>Gráficas</h1>
            <p className='text-gray-400'>
              Desarrollamos gráficos <br />
              personalizados que comunican <br />
              eficazmente la identidad y <br />
              mensaje de tu marca. Desde <br />
              banners y gráficos para redes <br />
              sociales hasta infografías y <br />
              material visual de apoyo, <br />
              creamos contenido visual que <br />
              potencia tu presencia en todos <br />
              los canales de comunicación.
            </p>
          </div>
          <div className='w-full sm:w-80 md:w-[319px] h-[450px] bg-customDarkBg2 rounded px-6 py-6'>
            <img
              src='/assets/icons/metricas.svg'
              alt='metricas'
              className='mx-auto'
            />
            <h1 className='text-customSecondary mt-10'>
              Métricas de Rendimiento y <br /> Alcance
            </h1>
            <p className='text-gray-400'>
              Ofrecemos análisis detallados <br />
              para medir el rendimiento y <br />
              alcance de tus plataformas, <br />
              permitiéndote optimizar tus <br />
              estrategias digitales y tomar <br />
              decisiones informadas.
            </p>
          </div>
        </div>

        <div className='mt-10'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-52 h-12'
          >
            Hablemos
          </button>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <Companies />
      </div>
    </section>
  )
}
