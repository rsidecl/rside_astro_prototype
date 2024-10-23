export const Projects = () => {
  return (
    <div className='flex bg-customDarkBg1 ml-60 mr-40'>
      <div className=' w-1/2  bg-customDarkBg1  text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold '>
        <h2 className='text-customSecondary text-2xl'>
          {' '}
          Proyectos Personalizados para <br /> Impulsar tu Exito
        </h2>
        <h1 className='text-white text-4xl my-6'>
          Cuidamos Cada Detalle <br /> para el Exito de tu <br /> Negocio
        </h1>
        <h3 className='text-white text-lg my-6'>
          Transformamos tus Ideas en Soluciones <br /> Web Innovadoras
        </h3>

        <li className='text-white'>
          {' '}
          Atencion Personalizada para Cada Proyecto
        </li>
        <li className='text-white'>Desarrollo integral</li>
        <li className='text-white'>Versatilidad y adaptabilidad</li>
        <li className='text-white'>Componentes mordernos y dinamicos</li>
      </div>
      <div className='w-1/2 mt-20 mx-auto rounded-lg'>
        <div className='flex'>
          <img
            className='w-72 h-72 rounded-lg mr-4 my-4 -translate-y-10  '
            src='/assets/images/ganzo.jpg'
            alt=''
          />
          <img
            className='w-72 h-72 rounded-lg mr-4 my-4'
            src='/assets/images/ganzo.jpg'
            alt=''
          />
        </div>
        <div className='flex'>
          <img
            className='w-72 h-72 rounded-lg mr-4 my-4 -translate-y-10 '
            src='/assets/images/ganzo.jpg'
            alt=''
          />
          <img
            className='w-72 h-72 rounded-lg mr-4 my-4'
            src='/assets/images/ganzo.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
