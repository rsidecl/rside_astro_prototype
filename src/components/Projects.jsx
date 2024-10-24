export const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row bg-customDarkBg1 mx-4 md:mx-10 lg:mx-40'>
      <div className='flex-1 bg-customDarkBg1 text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold'>
        <h2 className='text-customSecondary text-2xl'>
          Proyectos Personalizados para <br /> Impulsar tu Éxito
        </h2>
        <h1 className='text-white text-4xl my-6'>
          Cuidamos Cada Detalle <br /> para el Éxito de tu <br /> Negocio
        </h1>
        <h3 className='text-white text-lg my-6'>
          Transformamos tus Ideas en Soluciones <br /> Web Innovadoras
        </h3>
        <ul className='text-white list-disc list-inside'>
          <li>Atención Personalizada para Cada Proyecto</li>
          <li>Desarrollo Integral</li>
          <li>Versatilidad y Adaptabilidad</li>
          <li>Componentes Modernos y Dinámicos</li>
        </ul>
      </div>
      <div className='flex-1 mt-10 md:mt-20 mx-auto rounded-lg'>
        <div className='flex flex-wrap justify-center'>
          <img
            className='w-72 h-72 rounded-lg m-2'
            src='/assets/images/ganzo.jpg'
            alt='Proyecto 1'
          />
          <img
            className='w-72 h-72 rounded-lg m-2'
            src='/assets/images/ganzo.jpg'
            alt='Proyecto 2'
          />
          <img
            className='w-72 h-72 rounded-lg m-2'
            src='/assets/images/ganzo.jpg'
            alt='Proyecto 3'
          />
          <img
            className='w-72 h-72 rounded-lg m-2'
            src='/assets/images/ganzo.jpg'
            alt='Proyecto 4'
          />
        </div>
      </div>
    </div>
  )
}
